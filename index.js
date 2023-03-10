// express and mongoose 
const express = require("express");
const bodyParse =  require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");


// apps 
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use("/" , require('./route/router'));
app.use(cors());

app.listen(PORT, () =>{
    console.log(`tu puerto esta listo en ${PORT}`)
})


