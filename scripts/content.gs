/**
* a simple/naive xml/json convertor
* uses content service to return a converted object
* it will detect whether the data is xml or json and do the conversion
* attributes are treated as properties
* text nodes will be the value of the property, or a node called text if there are also attributes
* supports post or get
* parameter convert= 'the string to be converted'
* parameter callback=somefunction will return JSONP instead (only xml->JSON conversions)
* returns either an xml or json string
* errors are thrown (not returned as part of the data)
*/
function doGet(e) {
  return Content.makeContent (e); 
}
function doPost(e) {
  return Content.makeContent (e); 
}
function doTest(e) {
  return Content.makeContent ({parameter:{convert:star}}); 
}
var Content = (function (ns) {
  /**
  * make the content for the content service
  * @param {object} e parameter to doget.post
  * @return {ContentService} the result
  */
  ns.makeContent = function  (e) {
    
    // convert
    var result = e && e.parameter && e.parameter.convert ? 
      convert(e.parameter.convert) : {
        inputFormat:'no data to convert',
        content:'use ?convert= to provide conversion data'
      }
    
    // serving json
    if (result.inputFormat === "xml") {
      var s = JSON.stringify(result.content);
      return ContentService
      .createTextOutput(e.parameter.callback ? e.parameter.callback + "(" + s + ")" : s )
      .setMimeType(e.parameter.callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON); 
    }
    else if (result.inputFormat === "json")  {
      try {
        var s = XmlService.getPrettyFormat().format(XmlService.createDocument(result.content));
      }
      catch (err) {
        return ContentService
        .createTextOutput('failed to format xml document ' + err.toString())
        .setMimeType(ContentService.MimeType.TEXT);
      }
      
      // the xml string
      return ContentService
      .createTextOutput(s)
      .setMimeType(ContentService.MimeType.XML);
    }
    else {
      return ContentService
      .createTextOutput(result.inputFormat + ':' + result.content)
      .setMimeType(ContentService.MimeType.TEXT);
    }
    
  }
  
  /**
  * do the conversion
  * @param {string} convertString the string to be converted
  * @return {ob} the result object
  */
  function convert(convertString) {
    
    // test if json or xml conversion is needed
    var conversionType;
    
    // json->xml
    try {
      var jsonRoot = JSON.parse(convertString);
      conversionType = "json";
    }
    
    // xml->json
    catch (err) {
      
      try {
        var xmlRoot = XmlService.parse (convertString).getRootElement();
        conversionType = "xml";
      }
      
      // it was neither
      catch (err) {
        return {
          inputFormat:'failed to identify conversion required',
          content:err
        }
      }
      
    }
    
    try {
      return {
        inputFormat:conversionType,
        content: conversionType === "xml" ? 
        makeObFromXml ( xmlRoot ) :
        makeXmlFromOb (jsonRoot , XmlService.createElement('root'))
      };
    }
    catch(err) {
      return {
        inputFormat:'failed to convert',
        content:err
      }
    }
  }
  
  
  return ns;
  
}) (Content || {});

