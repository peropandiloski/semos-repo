'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let countries = require('./data');

app.get('/countries', (request, response) => {
    if (!countries) {
        response.status(404).json({ message: 'No countries found.' });
    }
    response.json(countries);
});

app.get('/countries/:id', (request, response) => {

    let countryId = request.params.id;

    let country = countries.filter(country => {
        return country.id == countryId;
    });

    if (!country) {
        response.status(404).json({ message: 'country not found' });
    }

    response.json(country[0]);
});

app.post('/countries', (request, response) => {

    let country = {
        id: countries.length + 1,
        name: request.body.name,
        capitalCity: request.body.capitalCity,
        population: request.body.population,
    };

    countries.push(country);

    response.json(country);

});

app.put('/countries/:id', (request, response) => {

    let countryId = request.params.id;

    let country = countries.filter(country => {
        return country.id == countryId;
    })[0];

    const index = countries.indexOf(country);

    let keys = Object.keys(request.body);

    keys.forEach(key => {
        country[key] = request.body[key];
    });

    countries[index] = country;

    response.json(countries[index]);
});

app.delete('/countries/:id', (request, response) => {

    let countryId = request.params.id;

    let country = countries.filter(country => {
        return country.id == countryId;
    })[0];

    const index = countries.indexOf(country);

    countries.splice(index, 1);

    response.json({ message: `User ${countryId} deleted.` });

});

const hostname = 'localhost';
const port = 3040;

const server = app.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);

});

