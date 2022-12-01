const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    res.render('index')
});

router.get("/ruleta", (req, res) =>{
    res.render('ruleta')
});

router.get("/juego1", (req, res) =>{
    res.render('juego1')
});

router.get("/juego2", (req, res) =>{
    res.render('juego2')
});

router.get("/juego3", (req, res) =>{
    res.render('juego3')
});

router.get("/juego4", (req, res) =>{
    res.render('juego4')
});

router.get("/juego5", (req, res) =>{
    res.render('juego5')
});

module.exports = router;