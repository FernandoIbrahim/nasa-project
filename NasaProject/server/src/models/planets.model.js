const { parse } = require('csv-parse');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..',  '..', 'data', 'kepler_data.csv')
const planets = []


function isHabitable(planet){
    return  planet['koi_disposition'] === 'CONFIRMED'&&
    planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6;
}

function loadPlanetsData(){
    return new Promise( (resolve , reject) => {
        fs.ReadStream(filePath)
            .pipe(parse({
                comment: '#', 
                columns: true
            }))
            .on('data', (data) => {
                if(isHabitable(data)){
                    planets.push(data);
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err); 
            })
            .on('end', () => {
                resolve();
            });
    })
}

function getAllExoPlanets(){
    return planets;
}

module.exports = {
    loadPlanetsData,
    getAllExoPlanets
}



