const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2fae3b89c5b71dc3cfde4bb7329244f3&query='+latitude+','+longitude+'&units=f'

    request({url: url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', body.error.info)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+" It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out.")
        }
    })
}

module.exports = forecast