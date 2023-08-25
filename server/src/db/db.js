//mongoose connection // not in working // need to implement this architecture later

import mongoose from 'mongoose';
import config from '../config/dev.js';
// import config from 'config';

mongoose.connect(config.database.url, config.database.properties);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

// exports.db = db;
export default db;