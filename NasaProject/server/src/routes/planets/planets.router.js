const express = require('express');

const planetsControler = require('./planets.controller');
const plantesRouter = express.Router();

plantesRouter.get('/', planetsControler.getAllPlanets);

module.exports = plantesRouter;