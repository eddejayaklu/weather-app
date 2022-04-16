const adde=document.querySelector('#location')
document.querySelector('.btn').addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('/weather?address='+adde.value).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            document.querySelector('.message').textContent=data.weather
        })
    })
 })


