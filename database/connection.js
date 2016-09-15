'use strict'
console.log(process.env.DATABASE_URL);
module.exports =  require('monk')(process.env.DATABASE_URL)
