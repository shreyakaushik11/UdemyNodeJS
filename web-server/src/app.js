const express = require('express')
const app = express()

app.get('', (req, res)=>{    //we have put nothing inside quotes for the home page
    res.send("Hello express")
})

app.get('/help', (req, res)=>{
    res.send("Help page")
})

app.get('/about', (req, res)=>{
    res.send("About page")
})

app.get('/weather', (req, res)=>{
    res.send("Weather page")
})

app.listen(3000, ()=>{       //3000 is the port number
    console.log("Server is running")
})