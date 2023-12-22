 const mongoose = require('mongoose')
 const express = require('express')
 const cors = require('cors')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
 const cookieParser = require('cookie-parser')
const UserModel = require('./models/user')

 const app = express()
 app.use(express.json())
 app.use(cors({
   origin: ["http://localhost:5173"],
   methods: ["GET" , "POST"],
   credentials:true
 }))
 app.use(cookieParser())

 mongoose.connect('mongodb://0.0.0.0/Employee');

 app.post('/register',(req,res) => {
   const {name , email, password} = req.body;
   bcrypt.hash(password,10)
   .then(hash => {
      UserModel.create({name,email,password:hash})
      .then(user => res.json("Success"))
      .catch(err => res.json(err))
   }).catch(err => res.json(err))
 })

 app.post('/login',(req,res) => {
   const {email,password} = req.body;
   UserModel.findOne({email: email})
   .then(user => {
      if(user){
         bcrypt.compare(password,user.password, (err,response) => {
            if(response){
               const token = jwt.sign({email:user.email , role:user.role},
                 "jwt-secret-key", {expiresIn:'1d'} )
                res.cookie('token',token)
                return res.json({Status : "Success" , role:user.role})
            }else{
               return res.json("The password is incorrect")
            }
         })
      }else {
         return res.json("No Record found")
      }
   })
 })

 require('dotenv').config()
 
 const LANGUAGE_MODEL_API_KEY = process.env.API_KEY
 const LANGUAGE_MODEL_URL = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${LANGUAGE_MODEL_API_KEY}`
 
 app.get('/prompt/:text', async (req, res) => {
     const text = req.params.text
     const payload = {
         prompt: { "text": text },
     }
     const response = await fetch(LANGUAGE_MODEL_URL, {
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(payload),
         method: "POST",
     })
 
     const data = await response.json()
     res.send(data)
 })
 app.listen(3001, () => {
    console.log("server is runnning......")
 })