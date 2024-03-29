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

//firebase admin init
let admin = require('firebase-admin');
const serviceAccount = require('./utils/monicity-72dda-firebase-adminsdk-xa2mn-5ea5d52f20.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

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
let contactRoute = require('./routes/contactRoute')


//
app.use(homeRoute)
app.use(aboutRoute)
app.use(contactRoute)

app.use((req, res) => {
    res.status(400).send("Error Page or Page Not Found") // render()
})


app.listen(3002, () => {
    console.log("monicity listening on 3001")
})