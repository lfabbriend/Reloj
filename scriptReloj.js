function relojAnalogico() {
    horas = new Date().getHours()+12;
    minutos = new Date().getMinutes();
    segundos = new Date().getSeconds();

    if (horas>=12) {
        porcentajeHoras = horas / 12 * 360;
    }

    else {
        porcentajeHoras = horas / 24 * 360;
    }

    porcentajeHoras += minutos / 60 * 30;
    porcentajeMinutos = minutos / 60 *360;
    porcentajeSegundos = segundos / 60 * 360;

    document.getElementById("horas").style.transform = "rotate("+porcentajeHoras+"deg)";
    ocument.getElementById("minutos").style.transform = "rotate("+porcentajeMinutos+"deg)";
    ocument.getElementById("segundos").style.transform = "rotate("+porcentajeSegundos+"deg)";
}

setInterval(relojAnalogico,1000);

let html = document.getElementById("relojDigital");
setInterval(function(){
    horas = new Date().getHours();
    minutos = new Date().getMinutes();
    segundos = new Date().getSeconds();

    html.innerHTML = horas+" : "+minutos+" : "+segundos;},1000)