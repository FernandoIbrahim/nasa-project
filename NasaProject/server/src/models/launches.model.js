const lastLaunch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Exporer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Keppler-442 b',
    customers: ['Nasa', 'ZTM'],
    upcoming: true,
    success: true,
};

let lastestFlightNuber = 100;

const launches = new Map();
launches.set(lastestFlightNuber, lastLaunch);

function getAllLauches(){
    return Array.from(launches.values());
}


function addNewLaunch(launch){
    lastestFlightNuber++;

    let newLauch = Object.assign( launch, {
        success: true,
        upcoming: true,
        flightNumber: lastestFlightNuber,
        customers: ['Zero to Mastery', 'NASA']
    });

    launches.set(lastestFlightNuber, newLauch);
    return Array.from(launches.values());
}

function removeLaunch(id){

    const abortedLaunch = launches.get(Number(id));
    console.log(abortedLaunch);
    abortedLaunch.success = false;
    abortedLaunch.upcoming = false;
    return abortedLaunch;
}

module.exports = {
    
    getAllLauches,
    addNewLaunch ,
    removeLaunch
}