const api = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9695a3db0decd330de8db4f772c625b5`; 
//как сделать динамическим q=London,uk? чтобы человек вводил город и измеялось значение

fetch(api) 
.then(function (resp){ return resp.json() })
.then(function (data){
    console.log(data);
    document.querySelector(`.package-name`).innerHTML = data.name;
    document.querySelector(`.price`).innerHTML = Math.round(data.main.temp- 273)+ "&deg;";
    document.querySelector(`.disclaimer`).innerHTML = data.weather[0][`description`];
})
.catch(function(){

})
