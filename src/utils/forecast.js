const request=require('request')

const forecast=(address,callback)=>{
    const url_loc='http://api.weatherstack.com/current?access_key=32ba56873e92725bad47a8655ef79e82&query='+address
    request({url:url_loc,json:true},(error,response)=>{
        callback(undefined,{
        weather:'It is currently '+response.body.current.temperature +' It feel like '+response.body.current.feelslike+' degress out.'
        })
    })
}

module.exports=forecast

