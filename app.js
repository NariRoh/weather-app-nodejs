const request = require("request");
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true, 
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv; 
  var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true 
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google servers.');
  } else if (body.status === "ZERO_RESULTS") {
    console.log("Unable to find that address");
  } else if (body.status === "OK") {
    const { lat, lng } = body.results[0].geometry.location;
  
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lng}`);
  }
});
