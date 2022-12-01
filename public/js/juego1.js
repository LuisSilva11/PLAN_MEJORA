const first = document.querySelector('#grafo');
const second = document.querySelector('#second');
const tercero = document.querySelector('#datebd');
const four = document.querySelector('#componentes');
const five = document.querySelector('#bdnor');

console.log(first);


first.addEventListener('change', ()=>{
    let valorOption = first.value;
    console.log(valorOption);

    if(valorOption ==1){
        alert("ganaste")
    }else{
        alert("Perdiste")
    }
})

second.addEventListener('change', ()=>{
    let valorOption = second.value;
    console.log(valorOption);

    if(valorOption ==2){
        alert("ganaste")
    }else{
        alert("Perdiste")
    }
})

tercero.addEventListener('change', ()=>{
    let valorOption = tercero.value;
    console.log(valorOption);

    if(valorOption ==1){
        alert("ganaste")
    }else{
        alert("Perdiste")
    }
})

four.addEventListener('change', ()=>{
    let valorOption = four.value;
    console.log(valorOption);

    if(valorOption ==5){
        alert("ganaste")
    }else{
        alert("Perdiste")
    }
})

five.addEventListener('change', ()=>{
    let valorOption = five.value;
    console.log(valorOption);

    if(valorOption ==3){
        alert("Perdiste")
    }else{
        alert("Perdiste")
    }
})