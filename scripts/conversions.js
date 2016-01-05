/**
* convert json to xml
* @param {object] ob an object to convert
* @param {XmlElement} parent usually the root on first call
* @return {XmlElement} the parent for chaining
*/
function makeXmlFromOb (ob, parent) {
    
  
  // this is recursive to deal with multi level JSON objects
  Object.keys(ob).forEach (function (d,i) { 
    
    // if its an array, we repeat the key name of the parent
    if (Array.isArray(ob)) {
      if (i === 0 ) {
        // the first element already exists
        var child = parent;
      }
      else {
        var child = XmlService.createElement(parent.getName());
        parent.getParentElement().addContent(child);
      }
    }
    else {
     var child = XmlService.createElement(d);
     parent.addContent (child);
    }
    
    // need to recurse if this is an object/array
    if (typeof ob[d] === 'object' ) {
      
      // the new parent is the newly created node
      return makeXmlFromOb (ob[d] , child );
    }
    else { 
      
      // regular node, set the text to the value
      child.setText(ob[d]);
    }
    
  });
  
  return parent;
}

/**
* traverse an xml tree and create a js object
* @param {XmlElement} xmlElement the parent
* @return {object||string} a new branch
*/
function makeObFromXml(xmlElement) {
  
  // parent for this iteration
  var job = {};
  var name = xmlElement.getName();
  
  // if there are any attributes then we need to add them as props
  //xmlElement.getAttributes().forEach(function(d) {
  //  job[d.getName()] = fixValue(d.getValue());
  //});
  
  xmlElement.getAttributes().forEach(function(d) {
    var child = XmlService.createElement(d.getName());
    child.setText(d.getValue());
    xmlElement.addContent(child);
  });
  
  
  // any children
  var kids = xmlElement.getChildren();
  if (!kids.length) {
    // its just a value
    return fixValue(xmlElement.getText());
  } 
  
  else {
    
    // if there are any children we need to recurse
    kids.forEach (function(d) {
      store ( job , d.getName() , makeObFromXml(d));
    });
    
    // if there is also a text node, we need to add that too, but also create a node for it
    store (job , 'text' ,  fixValue(xmlElement.getText()));
    
  }
  return job;
  
  function store( job , name , value ) {
    

    // if it's a repeated key, then we need to turn into an array
    if (job.hasOwnProperty(name) && !Array.isArray (job[name])) {
      job[name] = [job[name]];
    }
    
    // push or assign
    if (value !== '') {
      if (Array.isArray (job[name])) {
        job[name].push (value);
      }
      else {
        job[name] = value;
      }
    }
    
  }
  
  /**
   * converts strings from xml back to regular types
   * @param {string} value the string value
   * @param {*} a native type
   */
  function fixValue (value) {
  
    // is it truthy/falsely
    var lowerValue = value.toLowerCase().trim();
    
    if (lowerValue === false.toString()) return false;
    if (lowerValue === true.toString()) return true;
    
    // is it a number
    if (isFinite(lowerValue) && lowerValue !== '') return new Number (lowerValue);
    
    // just leave it untouched
    return value;
  }
  
}

