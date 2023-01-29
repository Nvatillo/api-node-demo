const MONGO_URL = process.env.MONGO_URL;
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGOUSER = process.env.MONGOUSER;
const {MongoClient, CURSOR_FLAGS} = require('mongodb');

const express = require("express");
const bodyParse =  require("body-parser");
const uri = `mongodb+srv://${MONGOUSER}:${MONGOPASSWORD}@${MONGO_URL}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

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

async function connect(){
 
    try {
        await client.connect();
        console.log("conectado con exito");
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
connect().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db("test");
 
    console.log("Databases:" + databasesList);
};

listDatabases();
 

 