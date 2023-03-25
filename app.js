const APIKEy= "59176a8a1341e0ec25ca6c167a1b8cfb"
const ApiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

let input_value=document.querySelector(".search input");
let search_button=document.querySelector('.search button')


async function weather_data(city){
    const response=await fetch(ApiURL+city+`&appid=${APIKEy}`)
    if(response.status===404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        
    }else{
        var data= await response.json()
    
    let cityname=document.querySelector(".city_name")
    cityname.innerHTML=data.name

    let humidity=document.querySelector(".humidity")
    humidity.innerHTML=data.main.humidity+" %"

    let wind=document.querySelector(".wind")
    wind.innerHTML=data.wind.speed+" km/h"

    let temp=document.querySelector(".temp")
    temp.innerHTML=Math.round(data.main.temp)+" °c"
    input_value.value="";

    if(data.weather[0].main==="Clouds"){
        document.querySelector(".weather_icon").src="images/clouds.png"
    }else if(data.weather[0].main==="Clear"){
        document.querySelector(".weather_icon").src="images/clear.png"
    }else if(data.weather[0].main==="Rain"){
        document.querySelector(".weather_icon").src="images/rain.png"
    }else if(data.weather[0].main==="Drizzel"){
        document.querySelector(".weather_icon").src="images/drizzel.png"
    }else if(data.weather[0].main==="Mist"){
        document.querySelector(".weather_icon").src="images/mist.png"
    }else if(data.weather[0].main==="Snow"){
        document.querySelector(".weather_icon").src="images/snow.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none"

    }
    
    
    }


search_button.addEventListener('click',()=>{
    console.log(input_value.value)
    weather_data(input_value.value)
})
