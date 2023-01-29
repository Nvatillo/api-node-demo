const express = require("express");
const bodyParse =  require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.get("/", (req,res) => {
    res.status(200).send("listo papurro")
});

app.get("/saludo",(req , res) => {
    res.status(200).send("hola");
})

app.post("/adios",(req,res) => {
    const { nombre } = req.body;
    res.status(200).send(`adios ${nombre}`)
})

app.listen(PORT, () =>{
    console.log(`tu puerto esta listo en ${PORT}`)
})