//IMPORTING THE REQUIRED LIBRARIES
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

//STARTING THE APP
var app = express()

//SETTING THE STATIC DIRECTORY
app.use(express.static(__dirname + '/public/'))

//SETTING THE VIEW ENGINE
app.set('views', path.join(__dirname + "/public/views/"))
app.set('view engine','hbs')

//BODY PARSER SETTINGS
var urlencodedParser = bodyparser.urlencoded({ extended: false })

///////////////////////////////////ROUTES
//index route
app.get('/', (request, response)=>{
    response.render("index")
})

//login route
app.get('/login', (request, response)=>{
    response.render('login')
})
app.post('/login', urlencodedParser, (request, response)=>{
    console.log(request.body)
})

app.get('/faq', (request, response)=>{
    response.render('faq')
})

//SETTING THE LISTENER PORT OF THE APP
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("App is listening on port '"+PORT+"'");
})