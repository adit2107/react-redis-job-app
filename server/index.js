require('dotenv').config();
const logger = require('./helper/logger');
const express = require('express');
const app = express();
const path = require('path');
const db = require('./helper/mongohelper');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Routes
app.use(require('./controllers'));

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



if (process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}

db.connection.on('connected', async () => {
    await app.listen(port, () => {
        logger.info(`App running at ${port}`)
    })
})



