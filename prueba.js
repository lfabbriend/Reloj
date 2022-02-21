function getTime() {
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();    //obtengo el tiempo
    const segundos = tiempo.getSeconds();
    return { horas, minutos, segundos };
}


var relojesAnalogicos = document.getElementsByClassName("reloj analog");

function activarReloj(relojesAnalogicos) {

    const { horas, minutos, segundos } = getTime();

    const relojArg = new reloj(horas, minutos, segundos);
    const relojLa = new reloj(horas - 5, minutos, segundos);   //creo los objetos relojes de cada zona horaria y seteo el tiempo
    const relojNyc = new reloj(horas - 2, minutos, segundos);

    for (let i = 0; i < relojesAnalogicos.length; i++) {
        const relojEl = relojesAnalogicos[i];

        const partesDelReloj = relojEl.children;

        //creo que aca tengo que poner por cada id del elemento y comparar si es arg, la o nyc y luego iterar por cada elemento (solo las horas)

        for (let ii = 0; ii < partesDelReloj.length; ii++) {
            const element = partesDelReloj[ii];
            const id = element.id;

            switch (id) {
                case 'horas':
                    element.style.setProperty("--hours-rotation", relojArg.calculaGrados().hsDeg + "deg")
                    break;
                case 'minutos':
                    element.style.setProperty("--minutos-rotation", relojArg.calculaGrados().minsDeg + "deg")
                    break;
                case 'segundos':
                    element.style.setProperty("--segundos-rotation", relojArg.calculaGrados().segsDeg + "deg")
                    break;
            }

        }


    }
}

setInterval(() => activarReloj(relojesAnalogicos), 1000)


// document.getElementBy("horasArg").style.setProperty("--hours-rotation", relojArg.calculaGrados().hsDeg+"deg");
// document.getElementById("horasLa").style.setProperty("--hours-rotation", relojLa.calculaGrados().hsDeg+"deg");
// document.getElementById("horasNyc").style.setProperty("--hours-rotation", relojNyc.calculaGrados().hsDeg+"deg");
// document.getElementById("minutos").style.setProperty("--mins-rotation", relojArg.calculaGrados().minsDeg+"deg");
// document.getElementById("segundos").style.setProperty("--segs-rotation", relojArg.calculaGrados().segsDeg+"deg");
//setInterval(relojArg,1000);
//setInterval(relojLA,1000);
//setInterval(relojNYC,1000);

//relojDigital



