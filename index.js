// express and mongoose 
const express = require("express");
const bodyParse =  require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
 
// apps 
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use("/" , require('./route/router'));


app.listen(PORT, () =>{
    console.log(`tu puerto esta listo en ${PORT}`)
})


