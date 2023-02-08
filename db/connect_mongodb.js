const MONGOHOST = process.env.MONGOHOST;
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGOPORT = process.env.MONGOHOST;
const MONGOUSER = process.env.MONGOUSER;
const mongoose = require("mongoose");

// config and connection bd 
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://mongo:p1VsqDxSz4JfkgfOIJ9y@containers-us-west-132.railway.app:7650`, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

var topicEntity = {
   id : 0,
   name : "",
   url : ""
}

var parnetsEntity = {
  "name": "",
  "topics": [],
  "description": "",
  "avatar": "",
  "banner": ""
}

 // model and entity
 const topic = mongoose.model("topic", topicEntity);
 const parnets = mongoose.model("parnets",parnetsEntity)

 module.exports = {topic,parnets};