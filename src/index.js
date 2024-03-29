const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());   // by default express doesn't know how to read the request body
app.use(express.urlencoded({extended: true}));  

app.use('/api', apiRoutes);
// app.use('/flightsService/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

/**
 * In class task
 * Setup flights table using sequelize
 */
