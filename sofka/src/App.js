// class

export class Nave {
    constructor(nombre, combustible, actividad, tipoDeNave){
        this.nombre = nombre;
        this.combustible = combustible;
        this.actividad = actividad; // tiempo en funcionamiento
        this.tipoDeNave = tipoDeNave;
    }
}
  
class VehiculoLanzadero extends Nave {
    constructor(nombre, combustible, actividad, tipoDeNave, empuje, peso, transportePeso){
        super(nombre, combustible, actividad, tipoDeNave)
        this.empuje = empuje;
        this.peso = peso;
        this.transportePeso = transportePeso;
    }
}

class NaveNoTripulada extends Nave {
    constructor(nombre, combustible, actividad, tipoDeNave, zona){
        super(nombre, combustible, actividad, tipoDeNave)
        this.zona = zona;
    }
}

class NaveTripulada extends Nave {
    constructor(nombre, combustible, actividad, tipoDeNave, mision){
        super(nombre, combustible, actividad, tipoDeNave)
        this.mision = mision;
    }
}
