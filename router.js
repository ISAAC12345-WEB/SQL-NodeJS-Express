//let ejs = require('ejs');
const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/',(req,res) => {
    conexion.query('select * from zapatillas',(error,result)=>{
        if(error){
            throw error;
        } else {
            res.render('index',{result:result});
       } 
    })//tabla zapatillas
});
router.get('/filter', (req,res) =>{
    conexion.query('select id_zapatilla, precio from zapatillas', (error,result)=>{
        if(error){
            throw error
        }else{
            res.render('index1', {result})
        }
    })
})
router.get('/filterpais', (req,res) =>{
    conexion.query('select id_zapatilla, pais, precio from zapatillas', (error,result)=>{
        if(error){
            throw error
        }else{
            res.render('index2', {result})
        }
    })
})
//creamos registro
router.get('/create',(req,res) =>{
    res.render('create');
    //conexion.query('insert into zapatillas ')
})
//actualizamos
router.get('/edit/:id',(req,res) =>{
    const id = req.params.id;
    conexion.query('select * from zapatillas where id_zapatilla = ?',[id],(error,result)=>{
        if(error){
            throw error;
        } else {
            res.render('edit', {zapatillas:result[0]});
       }
    })
})
router.get('/delete/:id', (req,res) =>{
    const id = req.params.id;
    conexion.query('delete from zapatillas where id_zapatilla = ?',[id],(error,result) =>{
        if(error){
            throw error;
        } else {
            res.redirect('/');
       }
    })
})
const crud = require('./controller/crud')
router.post('/guardar', crud.guardar);
router.post('/actualizar', crud.actualizar);
router.get('/filtrar', crud.filtrar)
router.get('/filtrarpais', crud.filtrarpais)

module.exports = router;