
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//console.log(process.argv)

const location = process.argv[2];

if(!location){
    console.log("Please provide the location.")
} else{ 
    geocode(location, (error, data)=>{
        if(error){
            console.log(error)
        }
        forecast(data.Latitude, data.Longitude, (error, forecastData)=>{
            if(error){
               return console.log(error)
            }
            console.log(data.Location)
            console.log(forecastData)
        })
    })
}


