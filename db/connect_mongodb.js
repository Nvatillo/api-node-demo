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
   "id": "",
   "name": "",
   "topic": [],
   "avatar": "",
   "banner": "",
   "description": "",
   "tcito_value": "",
   "social media": [
     {
       "type": "",
       "url": ""
     },
     ],
   "memberships": [
     {
       "id": "",
       "name": "",
       "cost": "",
       "description": ""
     }
   ],
   "gallery": [
     {
       "id": "",
       "name": "",
       "description": "",
       "source": [
         {
           "id": "",
           "type": "",
           "url": ""
         }
       ],
       "is_public": false,
       "memberships_suscriptions": ""
     }
   ],
   "payment_post": [
     {
       "name": "",
       "message": ""
     }
   ],
   "top_donations": [
     {
       "name": "",
       "count": ""
     }
   ]
 }
 // model and entity
 const topic = mongoose.model("topic", topicEntity);
 const parnets = mongoose.model("parnets",parnetsEntity)

 module.exports = {topic,parnets};