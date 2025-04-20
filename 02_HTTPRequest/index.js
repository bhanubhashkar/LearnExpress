import express from "express";
const app = express();
const port = 3000;

// GET
app.get("/", (req,res)=>{
    console.log(req.rawHeaders);
    res.send("Hello there...!")
    //res.sendStatus(200);
})

app.get("/contact", (req,res)=>{
    res.send("Hello there...! This is contact us page.")
    //res.sendStatus(200);
})

app.get("/about", (req,res)=>{
    res.send("Hello there...! This is about us page.")
    //res.sendStatus(200);
})

// POST
app.post("/user/bhanu", (req,res)=>{
    //res.send("User registered succesfully.")
    res.sendStatus(201);
})

// PUT
app.put("/user/bhanu", (req,res)=>{
    //res.send("Hi Bhanu, Data inserted succesfully.")
    res.sendStatus(200);
})

// PATCH
app.patch("/user/bhanu", (req,res)=>{
    //res.send("Hi Bhanu, Data pdated succesfully.")
    res.sendStatus(200);
})

// DELETE
app.delete("/user/bhanu", (req,res)=>{
    //res.send("Hi Bhanu, Data deleted succesfully.")
    res.sendStatus(200);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})