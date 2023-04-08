const mysql= require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'producto_moda'
})
connection.connect((error)=>{
    if(error){ 
        console.error('El error de conexion es:'+error)
        return
    }
    console.log('Conectado BD MYSQL!!.');
})
module.exports = connection; 