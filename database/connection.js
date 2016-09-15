'use strict'
modules.exports =  require('monk')(process.env.DATABASE_URL)
