const express = require("express");
const router = express.Router();
const topic = require('../db/connect_mongodb')



router.get("/api/v1/topics",async (req,res) =>{
    let listTopic = await topic.find();
    let topicsBd = []
    let response = [];
    
    listTopic.forEach(x => topicsBd.push({
      "id" : x.id,
      "name" : x.name,
    }))
    
    let otros = topicsBd.find(x => x.name == "Otros");
    
    response = topicsBd.filter(x => x.name !== "Otros");
   
    response.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

    response.push(otros)

    res.send(response);
})

module.exports = router;