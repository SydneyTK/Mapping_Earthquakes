// 13.2.4 Add console.log to check to see if our code is working
console.log("working");
// 13.4.3 Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//13.4.3 define the line varaible 
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ]; 

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// 13.2.4 We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map. this link is the dark map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);;