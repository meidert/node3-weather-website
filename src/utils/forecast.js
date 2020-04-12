const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=8d1ef364ae6642a5e3d9c7d293a27db6&query=' + latitude + ', ' + longitude + '&units=m'   

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' ' + body.current.temperature + ' °C'
                )
        }
    })
}

module.exports = forecast