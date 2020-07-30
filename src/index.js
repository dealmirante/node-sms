const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto 3000');
});