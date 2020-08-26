const mongoose = require('mongoose');
const logger = require('./logger');

const url = process.env.MONGODB_URI;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => {
    logger.info(`connected to DB successfully`);
})
.catch((err) => {
    logger.error(`unable to connect ${err}`);
});

module.exports = mongoose;