const { demand } = require('yargs');
const lugar = require('./Lugar/lugar')
const clima = require('./Clima/clima')

const axios = require('axios')


const argv = require('yargs').options({
    direccion: {

        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;



const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion)

        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng)

        return `La temperatura en ${direccion} es de ${temperatura} grados.`;

    } catch (error) {
        `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)