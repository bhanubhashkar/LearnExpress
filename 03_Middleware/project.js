import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) =>{
    res.send('Hi');
    //res.sendFile(__dirname+"public/project.html")
})

app.post("/validate", (req,res)=>{
    if(req.body.cred==="Passw0rd"){
        res.sendFile(__dirname+"/public/project.html")
    }else{
        res.sendFile(__dirname+"/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
