const express = require("express");
const router = express.Router();
const topic = require('../db/connect_mongodb')



router.get("/topic",async (req,res) =>{
    let listTopic = await topic.find();
    listTopic.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    res.send(listTopic);
})

module.exports = router;