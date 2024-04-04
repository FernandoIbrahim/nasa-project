const launchesModel = require('./../../models/launches.model');
const launchesRouter = require('./launches.router');

function httpGetAllLaunches (req, res) {
    console.log(`requisição feita na url: ${req.url}`)
    res.status(200).json(launchesModel.getAllLauches());
}

function httpPostNewLauch(req, res){
    let launch = req.body;
    console.log(launch);
    if(!(launch.mission || launch.rocket || launch.launchDate || launch.target)){
        return res.status(400).json({
            error: 'Missing a required launch statement',
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate.getTime())){
        return res.status(400).json({
            error: 'Missing launch date inválid',
        })
    }
    
    res.status(200).json(launchesModel.addNewLaunch(launch));
}


function httpDeleteLaunch(req, res){
    const id = req.params.id
    const result = launchesModel.removeLaunch(id);
    console.log(result);
    return res.status(200).json(result);
}

module.exports = {
    httpGetAllLaunches,
    httpPostNewLauch,
    httpDeleteLaunch
}