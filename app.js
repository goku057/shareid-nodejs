//setting up express 
const express = require("express");
const app = express();

//setting up view engine
app.set("view engine", "ejs");

//setting middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//setting up the routes
const basicRoutes = require("./routes/basicRoutes.js");


//using the routes
app.use(basicRoutes);








app.listen("3000", ()=>{
    console.log("The server is up and its on: localhost:3000 ");
});