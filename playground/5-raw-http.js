const https = require('https')
const url = 'https://api.darksky.net/forecast/6aa4f7a3c03a51122ad8c7a6b70d62a8/45,-78'

const request = https.request(url, (response)=>{
    let data = ''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })

})

    request.on('error', (error)=>{
        console.log("An error", error)
    })

    request.end()

