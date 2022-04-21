const path=require('path')
const express=require('express')
const forecast=require('./utils/forecast')
const address=require('./utils/Converting_co-ordinates-address')




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

// app.get('/currentWeather',(req,res)=>{
//     if(req.query.latitude){
//         address(req.query.latitude,req.query.longitude,(error,data)=>{
//             if(data.locality){
//                 forecast(data.locality,(error,data)=>{
//                     return res.send
//                 }
//             }
//         })
//     }
   
// })
app.get('/currentWeather',(req,res)=>{
    if(req.query.latitude){
        address(req.query.latitude,req.query.longitude,(error,data)=>{
            if(data.locality){
                forecast(data.locality,(error,data)=>{
                    return res.send(data)
                })
            }
            else{
                forecast(data.county,(error,data)=>{
                    return res.send(data)
                }) 
            }
        })
    }
})

app.listen(port,()=>{
    console.log("Server is Running!!")
})