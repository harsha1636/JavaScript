const apiKey="be2cf063b950f4e1422c225d7edf1269";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
// const weatherIcon=Document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);        //to display data in console

    document.querySelector(".city").innerHTML = data.name;   // to change the text on css selector
    document.querySelector(".temp").innerHTML=(data.main.temp) + "°c";   // the temp value is stored inside main on round figure
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + " km/h";

    // if(data.Weather[0].main == "clouds"){
    //     weatherIcon.src="Images/clouds.png";
    // }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
