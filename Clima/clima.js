const axios = require('axios')

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e2e4227b2f16587e13e834f28310a23f&units=metric`)
    return resp.data.main.temp

}

module.exports = {
    getClima
}