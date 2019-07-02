// console.log("Starting");

// setTimeout(()=>{
//     console.log("3 second timer")
// }, 3000)

// setTimeout(()=>{
//     console.log("0 second timer")
// }, 0)

// console.log("Stopping");

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/6aa4f7a3c03a51122ad8c7a6b70d62a8/37.8267,-122.4233'

// request({url: url, json: true}, function(error, response){
//     if(error){
//         console.log("Unable to connect to Weather service!")
//     }
//     else if(response.body.error){
//         console.log("Unable to find location")
//     }
//     else console.log(response.body.daily.data[0].summary + " It is currently "+ response.body.currently.temperature + " degrees out. There is a "+ response.body.currently.precipProbability + " % chance of rain.")
// })

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hyZXlha2F1c2hpazExIiwiYSI6ImNqeGxqeTRzZjA2eGozb21mZnVvbDRpdzQifQ.9d-3mogDyfh-wYg9fDay1A&limit=1'

// request({url: url2, json: true}, function(error, response){

//     if(error){
//         console.log("Unable to connect to location services!")
//     }
//     else if(response.body.features.length===0){
//         console.log("Unable to find location, try another search")
//     } 
//     else {
//     console.log("Latitude: "+ response.body.features[0].center[1]);
//     console.log("Longitude: "+ response.body.features[0].center[0]);
//     }

// })


geocode('Boston', (error, data)=>{
    if(error)
      console.log(error)
    else console.log(data)
})

forecast(37.8267,-122.4233, (error, data)=>{
    if(error){
        console.log(error)
    }
    else console.log(data)
})