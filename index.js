const express = require("express");
const app = express();
const port = 3000;


app.use((req,res,next) =>{
    res.status(404).render('404')
});

app.listen(port, () =>{
    console.log(`Ejecutando en el puerto : ${port}`)
})