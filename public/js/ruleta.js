let miRuleta = new Winwheel({

    'numSegments': 4,
    'outerRadius': 270,
    'segments': [
        { 'fillStyle': '#ECFF00', 'text': 'Cultura General' },
        { 'fillStyle': '#F90E0E', 'text': 'Musica' },
        { 'fillStyle': '#00D8FF', 'text': 'Geografia' },
        { 'fillStyle': '#5DFF00', 'text': 'Deportes' },

    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }
});

dibujarIndicador();
function Mensaje() {
    let SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    if (SegmentoSeleccionado.text == "Cultura General") {
        Swal.fire({ text:`Listo para la Trivia de ${SegmentoSeleccionado.text}`})
        setTimeout(() => {
            window.location.href = "/juego1";
        }, 2000);
        
    }
    if (SegmentoSeleccionado.text == "Musica") {
        Swal.fire({ text:`Listo para la Trivia de ${SegmentoSeleccionado.text}`})
        setTimeout(() => {
            window.location.href = "/juego2";
        }, 2000);
        
    }
    if (SegmentoSeleccionado.text == "Geografia") {
        Swal.fire({ text:`Listo para la Trivia de ${SegmentoSeleccionado.text}`})
        setTimeout(() => {
            window.location.href = "/juego3";
        }, 2000);
        
    }
    if (SegmentoSeleccionado.text == "Deportes") {
        Swal.fire({ text:`Listo para la Trivia de ${SegmentoSeleccionado.text}`})
        setTimeout(() => {
            window.location.href = "/juego4";
        }, 2000);
        
    }

    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
}
function dibujarIndicador() {
    let ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(320, 0);
    ctx.lineTo(300, 40);
    ctx.lineTo(280, 0);
    ctx.stroke();
    ctx.fill();
}