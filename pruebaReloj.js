class reloj {
    constructor(hs,mins,segs) {
    this.horas = horas;
    this.mins = minutos;
    this.segs = segundos;
}


calculaGrados(){
    hsDeg = porcentajeHoras = 360 / 12 * horas;
    minsDeg = porcentajeMinutos = 360 / 60 * minutos;
    segsDeg = porcentajeSegundos = 360 / 60 * segundos;
    return {hsDeg, minsDeg, segsDeg};
}
}


