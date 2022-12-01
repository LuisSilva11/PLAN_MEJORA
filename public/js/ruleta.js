let miRuleta = new Winwheel({

    'numSegments': 5,
    'outerRadius': 270,
    'segments': [
        { 'fillStyle': '#f1c40f', 'text': 'Pregunta 1' },
        { 'fillStyle': '#2ecc71', 'text': 'Pregunta 2' },
        { 'fillStyle': '#e67e22', 'text': 'Pregunta 3' },
        { 'fillStyle': '#e74c3c', 'text': 'Pregunta 4' },
        { 'fillStyle': '#8e44ad', 'text': 'Pregunta 5' },

    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 6,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }
});

dibujarIndicador();
function Mensaje() {
    let SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    if (SegmentoSeleccionado.text == "Pregunta 1") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego1";
    }
    if (SegmentoSeleccionado.text == "Pregunta 2") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego2";
    }
    if (SegmentoSeleccionado.text == "Pregunta 3") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego3";
    }
    if (SegmentoSeleccionado.text == "Pregunta 4") {
        alert("Listo para la  " + SegmentoSeleccionado.text);
        window.location.href = "/juego4";
    }
    if (SegmentoSeleccionado.text == "Pregunta 5") {
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