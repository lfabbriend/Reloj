function addZero(number) {
    return ("0" + number).slice(-2);
}

function getTime() {
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();
    return {horas, minutos, segundos};
}

function relojAnalogico() {

   const {horas,minutos,segundos} = getTime();

   /* if (hgetTs>=12) {
        horas = horas ;
        porcentajeHoras = horas / 24 * 360;  fijarse si funciona después de las 12
    }

    else {
        porcentajeHoras = horas / 12 * 360;
    }
*/


    porcentajeHoras = 360 / 12 * horas;
    porcentajeMinutos = 360 / 60 * minutos;
    porcentajeSegundos = 360 / 60 * segundos;

    document.getElementById("horas").style.setProperty("--hours-rotation", porcentajeHoras+"deg");
    document.getElementById("minutos").style.setProperty("--mins-rotation", porcentajeMinutos+"deg");
    document.getElementById("segundos").style.setProperty("--segs-rotation", porcentajeSegundos+"deg");


    /*document.getElementById("horas").style.transform = "translate(-50%,-50%) rotate("+porcentajeHoras+"deg)";
    document.getElementById("minutos").style.transform = "translate(-50%,-50%) rotate("+porcentajeMinutos+"deg)";
    document.getElementById("segundos").style.transform = "translate(-50%,-50%) rotate("+porcentajeSegundos+"deg)";
*/}

setInterval(relojAnalogico,1000);

let html = document.getElementById("tiempo");

setInterval(function() {
    const {horas,minutos,segundos} = getTime();

    html.innerHTML = addZero(horas)+" : "+addZero(minutos)+" : "+addZero(segundos);
},1000);