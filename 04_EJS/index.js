import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    //res.send("Hi")
    const d = new Date();
    let dayType = null;
    let advice = null;
    let day = d.getDay();
    console.log(day);

    if (day == null || day == undefined) {
        console.log('Invalid Day');
    } 
    else if(day>=0 && day<=5){
        dayType = 'weekday';
        advice = 'work hard';
    } 
    else {
        dayType = 'weekend';
        advice = 'have fun';
    }

    res.render("index.ejs", {
        dayType : dayType,
        advice : advice
    })
    
});

app.listen(port, ()=>{
    console.log("Server is running");
})
