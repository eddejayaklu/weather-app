const path=require('path')
const express=require('express')
const forecast=require('./utils/forecast')


const publicPath=path.join(__dirname,'../public')

const app=express()
const port=process.env.PORT || 3000

app.set('view engine','hbs')
app.use(express.static(publicPath))


 app.get('',(req,res)=>{
    res.render('index')
})

app.get('/weather',(req,res)=>{
     if(req.query.address){
        forecast(req.query.address,(error,data)=>{
        return res.send(data) 
         })
     }
})


app.listen(port,()=>{
    console.log("Server is Running!!")
})