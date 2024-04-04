const API_URL = 'http://localhost:8000' 

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() { 
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLauches =  await  response.json();
  return fetchedLauches.sort((a ,b) =>  a.flightNumber -  b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }catch(error){
    return {
      ok:false,
    }
  }

}

async function httpAbortLaunch(id) {

  try{
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  }catch(error){
    return {
      ok:false,
    }
  }

}


export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};