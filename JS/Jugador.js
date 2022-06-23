class Jugador extends Persona {
    constructor(nombre, edad, equipo, nacionalidad) {
        super(nombre,edad)
        this.equipo = equipo
        this.nacionalidad = nacionalidad

    }

    printDataJugador(){
        console.log(`Nombre jugador : ${this.nombre} Edad: ${this.edad} Equipo Actual: ${this.equipo}`);
    }
}