

const adde=document.querySelector('#location')
document.querySelector('.btn').addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('/weather?address='+adde.value).then((response)=>{
        response.json().then((data)=>{
            document.querySelector('.message').textContent=data.weather
        })
    })
 })

 navigator.geolocation.getCurrentPosition((position)=>{
   const latitude=position.coords.latitude
   const longitude=position.coords.longitude
   console.log(latitude,longitude)
   fetch(`/currentWeather?latitude=${latitude}&longitude=${longitude}`).then((response)=>{
    response.json().then((data)=>{
        document.querySelector('.message').textContent=data.weather
        console.log("hello")
    })
 })  
 },()=>{
    alert('Could not get your position')
})




