const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(err.message)
});

// require models
require('./models/Firefighter');
require('./models/Admin');
require('./models/Info');

const app = require('./app');
app.set('env', process.env.NODE_ENV || "development"); // TODO MAKE THIS WORK with production
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${server.address().port}`);
})
