const request = require("request");
/* 
  request({}, (error, response, body));
  To make HTTP request
  takes 2 args,
  1. Options object
    Where you specify the things unique to your request: URL
  2. Callback function 
    It gets called once the data comes back from the HTTP endpoint (once that json data comes back into the node application)  
    - body: is the core data that comes back from the server
    - response: stores information about the response and about their request (statusCode)
    - error: errors on the requested server
*/
request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
  json: true 
  // 👆 Tells request the data coming back is JSON and it will take the JSON string and convert it to an object.
}, (error, response, body) => {
  // console.log(JSON.stringify(error, undefined, 2));
  // the 3rd argument here, is to specify how many spaces you wanna use per indentation.
  const { lat, lng } = body.results[0].geometry.location;
  console.log(`Address: ${body.results[0].formatted_address}`);

  console.log(`Latitude: ${lat}`);
  console.log(`Longitude: ${lng}`);

});
