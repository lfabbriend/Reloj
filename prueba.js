function getTime() {
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();
    return {horas, minutos, segundos};
}

const {horas,minutos,segundos} = getTime();

const relojArg = new reloj(horas,minutos,segundos);
const relojLa = new reloj (horas-5,minutos,segundos);   
const relojNyc = new reloj(horas-2,minutos,segundos);

relojArg.calculaGrados();

    document.getElementById("horasArg").style.setProperty("--hours-rotation", relojArg.calculaGrados().hsDeg+"deg");
    document.getElementById("horasLa").style.setProperty("--hours-rotation", relojLa.calculaGrados().hsDeg+"deg");
    document.getElementById("horasNyc").style.setProperty("--hours-rotation", relojNyc.calculaGrados().hsDeg+"deg");
    document.getElementById("minutos").style.setProperty("--mins-rotation", minDeg+"deg");
    document.getElementById("segundos").style.setProperty("--segs-rotation", segsDeg+"deg");

    setInterval(relojArg,1000);
    setInterval(relojLa,1000);
    setInterval(relojNyc,1000);