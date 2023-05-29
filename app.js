const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const fs = require("fs")
const ejs = require("ejs")
const index = fs.readFileSync("./view/index.ejs","utf-8")
const sub = fs.readFileSync("./view/sub.ejs","utf-8")

app.use(express.json())
app.use("/view",express.static("view"))
app.use("/flont",express.static("flont"))


app.get("/",(req,res)=>{
    let index_render = ejs.render(index,{

    })
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(index_render)
    res.end()
})
app.get("/sub",(req,res)=>{
    let index_render = ejs.render(sub,{

    })
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(index_render)
    res.end()
})
server.listen(3000,()=>{
    console.log("serverrun")
})