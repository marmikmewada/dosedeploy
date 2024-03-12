require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send("hello world");
})
app.get('/twitter', (req,res)=>{
    res.send("hello twitter");
})
app.get('/login', (req,res)=>{
    res.send("<h1>please login at chai aur code</h1>");
})
app.get('/youtube', (req,res)=>{
    const youtubeLink = "https://youtube.com"
    res.redirect(youtubeLink);
})
app.listen(port, ()=>{
    console.log(`app is listening to port : ${port}`);
})