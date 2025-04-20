
# Express Notes
[Checkout my Profile](https://github.com/bhanubhashkar)

## Introduction
I am learning Express and all the notes and handson exercises are here.

## Express

```js

```

### Create server

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