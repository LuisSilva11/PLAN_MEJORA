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
        alert("FELICIDADES RESPONDISTE CORRECTAMENTE")
    }else{
        alert("NADA QUE HACER")
    }
})

second.addEventListener('change', ()=>{
    let valorOption = second.value;
    console.log(valorOption);

    if(valorOption ==3){
        alert("FELICIDADES RESPONDISTE CORRECTAMENTE")
    }else{
        alert("NADA QUE HACER")
    }
})

tercero.addEventListener('change', ()=>{
    let valorOption = tercero.value;
    console.log(valorOption);

    if(valorOption ==4){
        alert("FELICIDADES RESPONDISTE CORRECTAMENTE")
    }else{
        alert("NADA QUE HACER")
    }
})

four.addEventListener('change', ()=>{
    let valorOption = four.value;
    console.log(valorOption);

    if(valorOption ==3){
        alert("FELICIDADES RESPONDISTE CORRECTAMENTE")
    }else{
        alert("NADA QUE HACER")
    }
})

five.addEventListener('change', ()=>{
    let valorOption = five.value;
    console.log(valorOption);

    if(valorOption ==1){
        alert("FELICIDADES RESPONDISTE CORRECTAMENTE")
    }else{
        alert("NADA QUE HACER")
    }
})