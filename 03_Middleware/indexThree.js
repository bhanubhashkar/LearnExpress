import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('tiny'));

app.get("/", (req, res)=>{
    //console.log(__dirname + "/public/form.html");
    res.sendFile(__dirname + "/public/form.html");
});

app.post("/action", (req,res)=>{
    console.log(req.body);
    //res.send(req.body)
    const name = req.body.fname + req.body.lname
    res.send('Your username is : ' + name)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

