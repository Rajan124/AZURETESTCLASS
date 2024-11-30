import express from 'express';

const PORT = 8080;
const app =express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome to node azure cicd");
});
app.get("/about", (req,res)=>{
    res.json({
        message:"this simple node app",
        developer:"Rajan Boudel"
    })
})