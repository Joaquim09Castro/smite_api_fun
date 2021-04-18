require('dotenv').config();
const Hirez = require('hirez.js');

const { DEV_ID, AUTH_KEY } = process.env;

let hirez = new Hirez({
    devId: DEV_ID,
    authKey: AUTH_KEY
})

hirez.smite('PC').session.generate()
    .then(session => console.log(session));

hirez.smite('PC').getGods()
    .then( resp => console.log(resp));