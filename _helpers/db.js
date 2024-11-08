// const config = require('config.json');
require('dotenv').config()
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
// mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
// mongoose.connect(process.env.MONGODB_URI, connectionOptions);
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};