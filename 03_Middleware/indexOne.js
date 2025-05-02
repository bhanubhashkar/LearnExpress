
import express from "express";
import bodyParser from "body-parser";

import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res)=>{
    //console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res)=>{
    console.log(req.body);
    // res.send('Ok')
    res.send('welcome, ' + (JSON.stringify(req.body)))
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

