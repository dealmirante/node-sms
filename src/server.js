const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// routes
app.use(require('./routes/index.routes'));

module.exports = app;
