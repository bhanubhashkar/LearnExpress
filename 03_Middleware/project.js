import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var userActive = false;

app.use(bodyParser.urlencoded({extended:true}));

// First way to create a middleware and validate user
function passwordCheck(req,res,next){
    if(req.body.cred==="Passw0rd"){
        userActive = true;
    }else{
        res.sendFile(__dirname+"/public/index.html")
    }
    next()
}

app.use(passwordCheck);

app.get("/", (req,res) =>{
    res.send('Hi');
    //res.sendFile(__dirname+"public/project.html")
})

// First way to create a middleware and validate user
app.post("/validateOne", (req,res)=>{
    if(userActive){
        userActive = false;
        res.sendFile(__dirname+"/public/project.html")
    }else{
        res.sendFile(__dirname+"/public/index.html")
    }
})

// Second way to validate password in method itself
app.post("/validateTwo", (req,res)=>{
    
    //if(req.body.cred==="Passw0rd"){
    if(req.body["cred"]==="Passw0rd"){
        res.sendFile(__dirname+"/public/project.html")
    }else{
        res.sendFile(__dirname+"/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
