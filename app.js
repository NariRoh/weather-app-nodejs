const request = require("request");

/* 
  request({}, (error, response, body));
  takes 2 args,
  1. Options object
    Where you specify the things unique to your request: URL
  2. Callback function 
    It gets called once the data comes back from the HTTP endpoint (once that json data comes back into the node application)  
*/
request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
  json: true 
  // 👆 Tells request the data coming back is JSON and it will take the JSON string and convert it to an object.
}, (error, response, body) => {
  console.log(body);
});
