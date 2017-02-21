
var Dexie = require('dexie');
var db = new Dexie('radiospringdb');

db.version(1).stores({
	stations: "++id,title,genre,desc,streamurl,bitrate"
});

//
// Manipulate and Query Database
//
/*
db.stations.add({title: "Sample Station", genre: "PsyTrance", streamurl: "http://teststream.com"}).then(function() {
   return db.stations.where("age").below(25).toArray();
}).then(function (youngFriends) {
   alert ("My young friends: " + JSON.stringify(youngFriends));
}).catch(function (e) {
   alert ("Error: " + (e.stack || e));
});
*/

db.stations.add({title: "Sample Station", genre: "PsyTrance", streamurl: "http://teststream.com"})