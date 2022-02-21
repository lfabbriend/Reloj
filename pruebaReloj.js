class reloj {
    constructor(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }


    calculaGrados() {
        let hsDeg =  360 / 12 * this.horas;
        let minsDeg =  360 / 60 * this.minutos;
        let segsDeg =  360 / 60 * this.segundos;
        return { hsDeg, minsDeg, segsDeg };
    }
}



