import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    //res.send("Hi")
    res.render("project.ejs", {
        author : "Bhanu",
        seconds : new Date().getSeconds(),
        fruit : ["apple", "guava", "banana"],
        content : "<b>This is HTML content.</b>"
    })
});


app.get("/action",(req,res)=>{
    //res.send(req.body)
    res.render("letters.ejs");
})


app.post("/action",(req,res)=>{
    //res.send(req.body)
    
    const letterCount = req.body["fname"].length;
    console.log(letterCount);
    res.render("letters.ejs", { noLetters : letterCount});
})

app.listen(port,()=>{
    console.log("App is running");
})

