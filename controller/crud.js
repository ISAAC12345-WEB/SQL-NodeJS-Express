const conexion = require('../database/db')

exports.guardar = (req,res) => {
    //const {modelo,colores,talla,precio} = req.body;
    const modelo = req.body.modelo;
    const colores = req.body.colores;
    const talla = req.body.talla;
    const genero = req.body.genero;
    const pais = req.body.pais;
    const precio = req.body.precio;
    //console.log(modelo + "-" + colores + "-" + talla + "-" + precio);
    conexion.query('insert into zapatillas set ?',{modelo:modelo, colores:colores, talla:talla,genero:genero, pais:pais,precio:precio}, (error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/');
        }
    })
}
exports.actualizar = (req,res) => {
    //const {modelo,colores,talla,precio} = req.body;
    const id = req.body.id;
    const modelo = req.body.modelo;
    const colores = req.body.colores;
    const talla = req.body.talla;
    const genero = req.body.genero;
    const pais = req.body.pais
    const precio = req.body.precio;
    conexion.query('update zapatillas set ? where id_zapatilla=?',[{
        modelo:modelo, colores:colores, talla:talla, genero:genero, pais:pais,precio:precio},id], (error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/');
        }
    })
}
exports.filtrar = (req,res) => {
    //const {modelo,colores,talla,precio} = req.body;
    const id = req.body.id;
    const modelo = req.body.modelo;
    const colores = req.body.colores;
    const talla = req.body.talla;
    const genero = req.body.genero;
    const pais = req.body.pais
    const precio = req.body.precio;
    conexion.query('select id_zapatilla, precio from zapatillas',[{
        modelo:modelo, colores:colores, talla:talla, genero:genero, pais:pais,precio:precio},id], (error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/index1');
        }
    })
}
exports.filtrarpais = (req,res) => {
    //const {modelo,colores,talla,precio} = req.body;
    const id = req.body.id;
    const modelo = req.body.modelo;
    const colores = req.body.colores;
    const talla = req.body.talla;
    const genero = req.body.genero;
    const pais = req.body.pais
    const precio = req.body.precio;
    conexion.query('select id_zapatilla, pais, precio from zapatillas',[{
        modelo:modelo, colores:colores, talla:talla, genero:genero, pais:pais, precio:precio},id], (error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/index2');
        }
    })
}
