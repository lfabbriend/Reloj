function getTime() {
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();    //obtengo el tiempo
    const segundos = tiempo.getSeconds();
    return {horas, minutos, segundos};
}

const {horas,minutos,segundos} = getTime();

const relojArg = new reloj(horas,minutos,segundos);
const relojLa = new reloj (horas-5,minutos,segundos);   //creo los objetos relojes de cada zona horaria y seteo el tiempo
const relojNyc = new reloj(horas-2,minutos,segundos);   

const arregloRelojes = [];
arregloRelojes[0] = relojArg;                           //creo el arreglo con los objetos reloj
arregloRelojes[1] = relojLa;
arregloRelojes[2] = relojNyc;

//aca flashe locura hice lo que pude, sé que no estoy pudiendo setear los grados a las agujas o será que no se setea el tiempo en los relojes (?

var relojeshtml = document.getElementsByClassName("relojes");
for(var re = 0, relo =0; i < relojeshtml.length; re++, relo++){
    relojeshtml[re].horas.style.setProperty("--hours-rotation", arregloRelojes[relo].calculaGrados().hsDeg+"deg");
    relojeshtml[re].minutos.style.setProperty("--hours-rotation", arregloRelojes[relo].calculaGrados().minsDeg+"deg");  
    relojeshtml[re].segundos.style.setProperty("--hours-rotation", arregloRelojes[relo].calculaGrados().segsDeg+"deg");
    setInterval(relojeshtml[re],1000);
};

// document.getElementBy("horasArg").style.setProperty("--hours-rotation", relojArg.calculaGrados().hsDeg+"deg");
// document.getElementById("horasLa").style.setProperty("--hours-rotation", relojLa.calculaGrados().hsDeg+"deg");
// document.getElementById("horasNyc").style.setProperty("--hours-rotation", relojNyc.calculaGrados().hsDeg+"deg");
// document.getElementById("minutos").style.setProperty("--mins-rotation", relojArg.calculaGrados().minsDeg+"deg");
// document.getElementById("segundos").style.setProperty("--segs-rotation", relojArg.calculaGrados().segsDeg+"deg");
//setInterval(relojArg,1000);
//setInterval(relojLA,1000);
//setInterval(relojNYC,1000);

//relojDigital

