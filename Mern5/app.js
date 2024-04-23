//Basic Lid Import
const express=require('express');
const app=new express();

//Security Middleware Import

const rateLimit=require('express-rate-limit');
const helmet=require('helmet');

const hpp=require('hpp');


const cors=require('cors');


const cookieParser=require('cookie-parser')
const path=require('path')
const mongoose = require('mongoose');
const router=require('./src/route/api')

app.use(cookieParser())

//cors open
app.use (cors());
//security Implementation
app.use(helmet());



app.use(hpp());




app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb'}));
let Limiter=rateLimit({windowMs:15*60*1000,max:3000});
app.use(Limiter)

//let URL="mongodb+srv://refathassanmunna272:Munna5820@cluster0.wzwcnetaup.mongodb./CRUD5"
let URL="mongodb+srv://<username>:<password>@cluster0.wzwcaup.mongodb.net/CRUD5"
let OPTION={user:"refathassanmunna272",pass:"Munna5820",autoIndex:true}
 mongoose.connect(URL,OPTION).then((err)=>{

    console.log('Database Connected')
}).catch((err)=>{
    console.log(err)
})



app.set('etag',false)

app.use("/api/v1",router)
app.use(express.static('client/dist'));

// add react Front End Routing
 app.use('*',function (req,res){
     res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
 })
module.exports=app
