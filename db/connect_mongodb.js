const MONGOHOST = process.env.MONGOHOST || "containers-us-west-132.railway.app";
const MONGOPASSWORD = process.env.MONGOPASSWORD || "p1VsqDxSz4JfkgfOIJ9y";
const MONGOPORT = process.env.MONGOHOST || 7650;
const mongoose = require("mongoose");


// config and connection bd 
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://mongo:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}`, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

var topicDto = {
   id : 0,
   name : "",
   url : ""
}

 // model and entity
 const topic = mongoose.model("topic", topicDto);


 module.exports = topic;