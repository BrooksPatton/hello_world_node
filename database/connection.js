'use strict'
module.exports =  require('monk')(process.env.DATABASE_URL)
