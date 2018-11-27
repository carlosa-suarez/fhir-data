var request = require('request');
var fs = require('fs');
var mockPatients = require('./mockpatients.js');
var patients = mockPatients.getPatientsArray();
var baseUrl = 'http://localhost:3000/3_0_1/Patient';

var element = patients[1];

var options = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/fhir+json',
    'Cache-Control': 'no-cache',
  },
};

function callback (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
}

function makeRequest(element) {
  options.url = baseUrl + `/${element.id}`;
  options.json = element.toJSON();
  request(options, callback);
}

patients.forEach(makeRequest.bind(this));
