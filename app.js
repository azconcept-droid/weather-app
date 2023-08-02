const request = require('request')


// const url = 'http://api.weatherstack.com/current?access_key=48f003a56c4cc3bc3e2a6a09621cd7ee&query=37.8267,-122.4233&units=s'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather app check your internet connection')
//     } else if (response.body.error) {
//         console.log('Unble to find location')
//     } else {
//     const temperature = response.body.current.temperature
//     const humidity = response.body.current.feelslike
//     const weather = response.body.current.weather_descriptions
//     console.log(weather + '. It is currently ' + temperature + ' degrees out. ' + 'It feels like ' + humidity + ' degrees out.')
//     }
// })

const mapurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFsZWN0bWFwIiwiYSI6ImNsa3RoeXJwejAwMTUzbG9qOXUyaW14bnYifQ.YzQKpAMShpxsN_GflNt23w&limit=1'

request({ url: mapurl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather app')
    } else if (response.body.features.length === 0) {
        console.log('Can\'t find location')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(response.body.features[0].place_name)
        console.log('latitude = ' + latitude, 'longitude = ' + longitude)
    }
})


// request({url: url, json: true}, (error, response) => {
//     console.log(response.body.current)
// })
// request({url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

// console.log('Starting')

// setTimeout(() => {
//     console.log('2 seconds timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)

// console.log('Stopping')