const express = require("express");
const app = express();
const path = require("path");
let notitasRouter = require("./routes/notitasRouter"); 
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", notitasRouter);




app.listen(3000, ()=>{
    console.log("http://localhost:3000/");
});