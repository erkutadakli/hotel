const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/room');
const languageRoutes = require('./routes/language');
const languageItemRoutes = require('./routes/languageitem');
const marketRoutes = require('./routes/market');
const priceRoutes = require('./routes/market');
const seasonRoutes = require('./routes/season');
const settingRoutes = require('./routes/setting');
const processRoutes = require('./routes/process');
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/rooms', roomRoutes);
app.use('/languages', languageRoutes);
app.use('/languageitems', languageItemRoutes);
app.use('/markets', marketRoutes);
app.use('/prices', priceRoutes);
app.use('/seasons', seasonRoutes);
app.use('/settings', settingRoutes);
app.use('/process', processRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;