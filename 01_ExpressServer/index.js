import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port no : ${port}.`);
})

app.get('/', (req, res) => {
  res.send('Hello World! Express is behind this message.')
})

app.get('/home', (req, res) => {
    res.send('This is home.')
})
