const express = require("express");
const router = express.Router();
const {topic,parnets} = require('../db/connect_mongodb')



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

    res.status(200).send(response);
})


router.get("/api/v1/parnets", async (req,res) => {
  let offset = req.query.offset;
  let limit = req.query.limit;

  let list = await parnets.find().skip(offset).limit(limit);

  let parnetsBd = []
  list.forEach(x => parnetsBd.push({
    "name": x.name,
    "topic": x.topic,
    "description": x.description,
    "avatar": x.avatar,
    "banner": x.banner
  }))

  res.status(200).send(parnetsBd)
})

router.get("/api/v1/partner", async (req,res) => {
  let id = req.query.id;


  let parnet = await parnets.findById({"_id":id}) 


  res.status(200).send(parnet)
})

module.exports = router;