const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

console.log(__dirname)
console.log(__filename)
// console.log(path.join(__dirname, '../public/'))

const route = path.join(__dirname, '../public/')
const viewsPath =  path.join(__dirname, '../src/templates/views')
const partialsPath = path.join(__dirname, '../src/templates/partials')

app.use(express.static(route))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res)=>{    
    //we have put nothing inside quotes for the home page
    res.render('index', {
        title : 'Weather App',
        name : 'Shreya'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help Page',
        name: 'Shreya'
    })
})

app.get('/about', (req, res)=>{
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res)=>{
    res.send([{
        forecast: {
            longitude : -78,
            latitude : 40
        },
        location : 'New Delhi'
    }])
})

app.listen(3000, ()=>{       //3000 is the port number
    console.log("Server is running")
})