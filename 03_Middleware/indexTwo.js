import express from "express";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

//app.use(morgan("combined"))

function logger(req,res,next){
    console.log("Request Method : " + req.method + " || Request URL :" + req.url);
    next()

}

app.use(logger)

app.get("/", (req, res)=>{
    //console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
