require('dotenv').config()
const express = require('express')
let bodyParser = require('body-parser')
let flash = require('connect-flash')

var app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")

app.use(require('express-session')({
    secret: "mncty",
    resave: false,
    saveUninitialized: false
}))

//Flash messages -using flash requires sessions
app.use(flash())


app.use(function(req, res, next) {
    res.locals.successMessage = req.flash("success_message");
    res.locals.errorMessage = req.flash("error_message");
    next();
})


//Routes declaration
let homeRoute = require('./routes/homeRoute')
let aboutRoute = require("./routes/aboutRoute")


//
app.use(homeRoute)
app.use(aboutRoute)


app.use((req, res) => {
    res.status(400).send("Error Page") // render()
})


app.listen(3000, () => {
    console.log("monicity listening on 3000")
})