
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Boston', (error, data)=>{
    if(error)
      console.log(error)
    else console.log(data)
    forecast(data.Latitude, data.Longitude, (error, data)=>{
        if(error){
            console.log(error)
        }
        else console.log(data)
    })
})
