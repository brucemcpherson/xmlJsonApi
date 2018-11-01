
var star = '<root response="True">' + '<data xx="abc">xyz</data>' +
'<result Title="Star Wars: Episode IV - A New Hope" Year="1977" imdbID="tt0076759" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: Episode V - The Empire Strikes Back" Year="1980" imdbID="tt0080684" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: Episode VI - Return of the Jedi" Year="1983" imdbID="tt0086190" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg"/>' +
'<result Title="Star Wars: Episode I - The Phantom Menace" Year="1999" imdbID="tt0120915" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: Episode III - Revenge of the Sith" Year="2005" imdbID="tt0121766" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: Episode II - Attack of the Clones" Year="2002" imdbID="tt0121765" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg"/>' +
'<result Title="Star Wars: The Force Awakens" Year="2015" imdbID="tt2488496" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: The Clone Wars" Year="2008" imdbID="tt1185834" Type="movie" Poster="http://ia.media-imdb.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: The Clone Wars" Year="2008?2015" imdbID="tt0458290" Type="series" Poster="http://ia.media-imdb.com/images/M/MV5BMTM0NjQ2Mjk0OV5BMl5BanBnXkFtZTcwODQ3Njc3Mg@@._V1_SX300.jpg"/>' +
'<result Title="Star Wars: Clone Wars" Year="2003?2005" imdbID="tt0361243" Type="series" Poster="http://ia.media-imdb.com/images/M/MV5BMjE2Mjk5Mzk3M15BMl5BanBnXkFtZTcwMDkzMTIzMQ@@._V1_SX300.jpg">' +
'abc</result></root>';


var testJson = JSON.stringify({
    "aString": "some string", 
    "aNumber": 8,
    "aBoolean": false,
    "anObject": {
      "apis": [{
        "name":"numbers",
        "url":"http://numbersapi.com/"
      },{
        "name":"faa",
        "url":"http://services.faa.gov/airport/status"
      }],
    },
    "anArray":  [
      { "value": 8 , "result": "legs an arachnid has" },
      { "value": 8 , "result": "furlongs in a mile" }
    ],
    "anotherArray":[1,2,3]
  });

  var  testXml = '<?xml version="1.0" encoding="UTF-8"?>' +
'<root>' +
 '<aString>some string</aString>' +
  '<aNumber>8</aNumber>' +
  '<aBoolean>false</aBoolean>' +
  '<anObject>' +
    '<apis>' +
      '<name>numbers</name>' +
      '<url>http://numbersapi.com/</url>' +
    '</apis>' +
    '<apis>' +
      '<name>faa</name>' +
      '<url>http://services.faa.gov/airport/status</url>' +
    '</apis>' +
  '</anObject>' +
  '<anArray>' +
    '<value>8</value>' +
    '<result>legs an arachnid has</result>' +
  '</anArray>' +
  '<anArray>' +
    '<value>8</value>' +
    '<result>furlongs in a mile</result>' +
  '</anArray>' +
  '<anotherArray>1</anotherArray>' +
  '<anotherArray>2</anotherArray>' +
  '<anotherArray>3</anotherArray>' +
'</root>';

