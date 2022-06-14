// class

class Nave {
    constructor(nombre, combustible, agenteOxidante, actividad, tipoDeNave){
        this.nombre = nombre;
        this.combustible = combustible;
        this.agenteOxidante = agenteOxidante;
        this.actividad = actividad; // tiempo en funcionamiento
        this.tipoDeNave = tipoDeNave;
    }
}
  
class VehiculoLanzadero extends Nave {
    constructor(nombre, combustible, agenteOxidante, actividad, tipoDeNave, empuje, peso, transportePeso){
        super(nombre, combustible, agenteOxidante, actividad, tipoDeNave)
        this.empuje = empuje;
        this.peso = peso;
        this.transportePeso = transportePeso;
    }
}

class NaveNoTripulada extends Nave {
    constructor(nombre, combustible, agenteOxidante, actividad, tipoDeNave, zona){
        super(nombre, combustible, agenteOxidante, actividad, tipoDeNave)
        this.zona = zona;
    }
}

class NaveTripulada extends Nave {
    constructor(nombre, combustible, agenteOxidante, actividad, tipoDeNave, mision){
        super(nombre, combustible, agenteOxidante, actividad, tipoDeNave)
        this.mision = mision;
    }
}

// selectors
const naveInput = document.querySelector(".nave-input"); 
const naveBtn = document.querySelector(".nave-btn");
const naveList = document.querySelector(".nave-list");

naveBtn.addEventListener("click", agregarNave)

const agregarNave=(event)=>{
    event.preventDefault();
}