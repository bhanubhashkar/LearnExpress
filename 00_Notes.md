
# Express Notes
[Checkout my Profile](https://github.com/bhanubhashkar)

## Introduction
I am learning Express and all the notes and handson exercises are here.

## Express

```js

```

### Create Server
```js
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port no : ${port}.`);
})

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

```

### Create Multiple Routes
```js
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port no : ${port}.`);
})

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.get("/contact", (req,res)=>{
    console.log(req.rawHeaders);
    res.send("Hello there...! This is contact us page.")
})

app.get("/about", (req,res)=>{
    console.log(req.rawHeaders);
    res.send("Hello there...! This is about us page.")
})

```

### Create HTTP Request
```js
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

```

### Access File Path Dynamically
```js
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res)=>{
    //console.log(__dirname + "/public/form.html");
    res.sendFile(__dirname + "/public/form.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

```

### Get form data from POST event
```js
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended : true }));

app.post("/form", (req,res)=>{
    console.log(req.body);
    const name = req.body.fname + req.body.lname
    res.send('Your username is : ' + name)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

```

### Create HTTP Request
```js

```

### Create HTTP Request
```js

```




## Sub Topic
Content

```js
code
```







## Main Topic
Content

```js
code
```

### Sub Topic
Content

```js
code
```