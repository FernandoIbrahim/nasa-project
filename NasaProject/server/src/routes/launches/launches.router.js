const express = require('express');

const launchesController = require('./launches.contoller');
const launchesRouter = express.Router();

launchesRouter.get('/', launchesController.httpGetAllLaunches);
launchesRouter.post('/', launchesController.httpPostNewLauch);
launchesRouter.delete('/:id', launchesController.httpDeleteLaunch);

module.exports = launchesRouter;