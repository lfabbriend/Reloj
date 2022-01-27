function setTime() {
    horas = new Date().getHours();
    minutos = new Date().getMinutes();
    segundos = new Date().getSeconds();
    return horas, minutos, segundos;
}

function relojAnalogico() {
   setTime();

    if (horas>=12) {
        horas = horas ;
        porcentajeHoras = horas / 24 * 360;  /*fijarse si funciona después de las 12*/
    }

    else {
        porcentajeHoras = horas / 12 * 360;
    }

    porcentajeHoras += minutos / 60 * 30;
    porcentajeMinutos = minutos / 60 *360;
    porcentajeSegundos = segundos / 60 * 360;

    document.getElementById("horas").style.transform = "rotate("+porcentajeHoras+"deg)";
    document.getElementById("minutos").style.transform = "rotate("+porcentajeMinutos+"deg)";
    document.getElementById("segundos").style.transform = "rotate("+porcentajeSegundos+"deg)";
}

setInterval(relojAnalogico,1000);

let html = document.getElementById("tiempo");

setInterval(function() {
    setTime();
    if (horas<10)
        horas = '0'+horas;
    if (minutos<10)
     minutos = '0'+minutos; 
     if (segundos<10)
        segundos = '0'+horas;   
    html.innerHTML = horas+" : "+minutos+" : "+segundos;
},1000);