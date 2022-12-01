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
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego1";
    }
    if (SegmentoSeleccionado.text == "Musica") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego2";
    }
    if (SegmentoSeleccionado.text == "Geografia") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego3";
    }
    if (SegmentoSeleccionado.text == "Deportes") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego5";
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