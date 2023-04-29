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
    console.log('Conectado con MYSQL y XAMPP(PUERTO 3306)!!..');
})
module.exports = connection; 