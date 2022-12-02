const first = document.querySelector('#grafo');
const second = document.querySelector('#second');
const tercero = document.querySelector('#datebd');
const four = document.querySelector('#componentes');
const five = document.querySelector('#bdnor');
const primero = document.querySelector("#primero")

console.log(first);

first.addEventListener('change', ()=>{
    let valorOption = first.value;
    console.log(valorOption);

    if(valorOption ==1){
        Swal.fire({ text:`Ganaste la buena`,icon:'success'})
    }else{
        Swal.fire({ text:`Nada que hacer`,icon:'error'})
    }
})

second.addEventListener('change', ()=>{
    let valorOption = second.value;
    console.log(valorOption);

    if(valorOption ==3){
        Swal.fire({ text:`Ganaste la buena`,icon:'success'})
    }else{
        Swal.fire({ text:`Nada que hacer`,icon:'error'})
    }
})

tercero.addEventListener('change', ()=>{
    let valorOption = tercero.value;
    console.log(valorOption);

    if(valorOption ==4){
        Swal.fire({ text:`Ganaste la buena`,icon:'success'})
    }else{
        Swal.fire({ text:`Nada que hacer`,icon:'error'})
    }
})

four.addEventListener('change', ()=>{
    let valorOption = four.value;
    console.log(valorOption);

    if(valorOption ==3){
        Swal.fire({ text:`Ganaste la buena`,icon:'success'})
    }else{
        Swal.fire({ text:`Nada que hacer`,icon:'error'})
    }
})

five.addEventListener('change', ()=>{
    let valorOption = five.value;
    console.log(valorOption);

    if(valorOption ==1){
        Swal.fire({ text:`Ganaste la buena`})
    }else{
        Swal.fire({ text:`Nada que hacer`,icon:'error'})
    }
})