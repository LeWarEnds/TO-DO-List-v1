//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const portNumber = 3000;

const todoOnScreen = ["Buy Food", "Cook Food", "Eat Food"]; //It's possible to push items while being constant array.
const workListItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
  const fullDay = date.getDate();

  res.render("lists", {
    listTitle: fullDay,
    listItems: todoOnScreen
  });
});

app.get("/work", function(req, res){
  res.render("lists", {
    listTitle: "Work List",
    listItems: workListItems
  });
});

app.post("/", function(req,res){
  const todoItemInput = req.body.todoTextArea;
  if(req.body.lists === "Work"){
    workListItems.push(todoItemInput);
    res.redirect("/work");
  } else{
    todoOnScreen.push(todoItemInput);
    res.redirect("/");
  }
});

app.listen(portNumber, function(){
  console.log("Server running at Port: " + portNumber);
});
