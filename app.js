const request = require("request");
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true, 
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
      // tells yargs to always parse the a or address's argument as a string
    }
  })
  .help()
  .alias('help', 'h')
  .argv; 
  // takes all of this configuration runs it through our arguments and stores the result in the argv variable

  // console.log(argv);
  var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true 
}, (error, response, body) => {
  const { lat, lng } = body.results[0].geometry.location;
  
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${lat}`);
  console.log(`Longitude: ${lng}`);
});
