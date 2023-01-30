const MONGOHOST = process.env.MONGOHOST;
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGOPORT = process.env.MONGOHOST;
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