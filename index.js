// env
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGOUSER = process.env.MONGOUSER;
const MONGOHOST = process.env.MONGOHOST;

// express and mongoose 
const express = require("express");
const bodyParse =  require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;
 

// apps 
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

// config and connection bd 
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}`, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

// entity 
const personaBd = {
    nombre: String,
    apellido: String,
 };

 // model and entity
const Persona = mongoose.model("persona", personaBd);



app.listen(PORT, () =>{
    console.log(`tu puerto esta listo en ${PORT}`)
})


app.get("/", (req,res) => {
    res.status(200).send("listo papurro")
});

app.post("/save", function (req, res) {
    const persona = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
    });
    persona.save(function (err) {
        if (err) {
            res.send(err)
        } else {
            res.send("save")
        }
    });
 });

 
app.post("/adios",(req,res) => {
    const { nombre } = req.body;
    res.status(200).send(`adios ${nombre}`)
})

 