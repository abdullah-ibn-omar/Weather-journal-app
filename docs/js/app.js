const APIKey = "b3739a4ce47baf3ea46e70c0c6d6cfdc";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const zipCodeField = document.getElementById('zipcode')


function post(url, res){
  data = {
    city: res.name,
    temperature:  (res.main.temp - 273.15).toFixed(0),
    date: new Date().toDateString(),
    userResponse: "accept ya basha",
    description: res.weather[0].description
  }

  fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  
}


function getDataFromServer(){
    fetch('/the-route')
    .then((data) => data.json())
    .then((data) => console.log(data));
    return data   
}


//weather app abdalla-omar 6x6Ny2n^Lw;5Vy2

const getWeatherData = () => {
    zipCode = zipCodeField.value;
    // console.log(zipCode)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${APIKey}`
    ).then(res => res.json() , err => console.log(err))
  .then(res => post('/postData' , res) , err => console.log(err))
  .then(res => getDataFromServer() ,err => console.log(err) )
  .then(res => updateUI(res), err => console.log(err))
  
}






function updateUI(info){
  // console.log(info)
  document.querySelector('.weather-info').innerHTML = ""
  document.querySelector('.weather-info').innerHTML = `
    <h2 class="city">${info.city}</h2>
    <h3 class="temp">${info.temperature} &#8451;</h3>
    <div class="state">${info.description}</div>
    <div class="feel">${document.querySelector('textarea').value}</div>
    <div class="date">${info.date},</div>

  `
}

document.querySelector('button').addEventListener('click' , () => {
  document.querySelector('.weather-info').classList.add('active')
  getWeatherData()
  zipCodeField.value = ""
})
