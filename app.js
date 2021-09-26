//setting up express 
const express = require("express");
const app = express();

//setting up view engine
app.set("view engine", "ejs");

//setting middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//setting up the routes
const basicRoutes = require("./routes/basicRoutes.js");
const authenticationRoutes = require("./routes/authenticationRoutes.js");
const accountInfoRoutes = require("./routes/profileRoutes/accountInfoRoutes.js");
const dashboardRoutes = require("./routes/profileRoutes/dashboardRoutes.js");
const postRoutes = require("./routes/postRoutes.js");
const messageRoutes=require("./routes/messageRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const searchRoutes = require("./routes/searchRoutes.js");


//using the routes
app.use(basicRoutes);
app.use(authenticationRoutes);
app.use(accountInfoRoutes);
app.use(dashboardRoutes);
app.use(postRoutes);
app.use(paymentRoutes);
app.use(searchRoutes);
app.use(messageRoutes);







app.listen("3000", () => {
    console.log("The server is up and its on: localhost:3000 ");
});