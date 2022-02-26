// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
*/


/*
fetchCoordsByIP('205.250.171.138',(error,coordinates) => {
  if (error) {
    console.log("It didn't work!" ,error);
    return;
  }
  console.log('It worked! Returned Coordinates:' ,coordinates);
});
*/

/*
fetchISSFlyOverTimes({ latitude: 48.4574, longitude: -123.3436 },(error,flyoverTimes) => {
  if (error) {
    console.log("It didn't work!" ,error);
    return;
  }
  console.log('It worked! ISS Flyover Times :' ,flyoverTimes);
});
*/

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    // console.log(datetime)
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});