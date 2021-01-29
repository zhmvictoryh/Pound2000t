import {
    PG_URL
  } from './config/config'
const pgPromise = require('pg-promise'); 
const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(PG_URL); // get connection to your db instance

exports.psql = psql;