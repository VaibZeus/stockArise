const bodyParser = require("body-parser")
const express = require("express")
const _ = require("lodash")
const app = express()

app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.render("default");
} )
app.get("/contact",(req,res)=>{
    res.render("contact");
} )

app.listen(4040, ()=>{
    console.log("server started on port 4040");
})

