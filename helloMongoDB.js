var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://admin123:admin123@mycluster1-vyzy8.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});