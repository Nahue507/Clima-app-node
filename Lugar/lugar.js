const axios = require('axios')





const getLugarLatLng = async(dir) => {
    const encoderURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encoderURL}`,
        headers: { 'x-rapidapi-key': '6a4d5e8debmshefdeb9c1650cdc4p1989d0jsn0309f2449f6b' }
    });

    const resp = await instance.get()

    if (resp.data.cod != 200)

    {
        throw new Error(`No hay resultaods para ${dir}`)
    }

    const direccion = resp.data.name
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;
    return {
        dir,
        lat,
        lng
    }


}
module.exports = {

    getLugarLatLng

}