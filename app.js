const express = require('express');
//const  guardar  = require('./controller/crud');
//const bodyParser = require('body-parser');
const app = express();
//app.use(express.static('public'));
//motor de plantilla
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));
/*app.get('/about', (req, res) =>
res.send('This is about page')
);*/
app.listen(3000,()=>{
    console.log('Servidor levantado en 3000')
});