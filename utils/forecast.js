const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=<YOUR ACCESS KEY>&query=' + lat + ',' + long +'&units=m'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
                const temperature = response.body.current.temperature
                const humidity = response.body.current.feelslike
                const weather = response.body.current.weather_descriptions
            callback(undefined, weather + '. It is currently ' + temperature + ' degrees celcius out. ' + 'It feels like ' + humidity + ' degrees celcius out.'
            //     {
            //     location: response.body.location.name+' '+response.body.location.country,
            //     temperature: response.body.current.temperature,
            //     humidity: response.body.current.feelslike,
            //     weather: response.body.current.weather_descriptions
            // }
            )
        }
    })
}

module.exports = forecast
