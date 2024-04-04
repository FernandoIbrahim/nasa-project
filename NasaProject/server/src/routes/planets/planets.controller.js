const planetsModel = require('../../models/planets.model.js');

function getAllPlanets(req, res){
    console.log(`requisição feita na url: ${req.url}`)
    res.status(202).json(planetsModel.getAllExoPlanets());
}


module.exports = {
    getAllPlanets
}