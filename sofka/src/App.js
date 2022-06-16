// class

export class Nave {
    constructor(nombre, combustible, actividad, tipoDeNave, pais){
        this.nombre = nombre;
        this.combustible = combustible;
        this.actividad = actividad; // tiempo en funcionamiento
        this.tipoDeNave = tipoDeNave;
        this.pais = pais;
    }
    despegue(){
        return alert('depegue');
    }
    aterrizaje(){
        return alert('aterrizaje');
    }
}

// class VehiculoLanzadero extends Nave {
//     constructor(nombre, combustible, actividad, tipoDeNave, pais, empuje, peso, transportePeso){
//         super(nombre, combustible, actividad, tipoDeNave, pais)
//         this.empuje = empuje;
//         this.peso = peso;
//         this.transportePeso = transportePeso;
//     }
// }

// class NaveNoTripulada extends Nave {
//     constructor(nombre, combustible, actividad, tipoDeNave, pais, zona){
//         super(nombre, combustible, actividad, tipoDeNave, pais)
//         this.zona = zona;
//     }
// }

// class NaveTripulada extends Nave {
//     constructor(nombre, combustible, actividad, tipoDeNave, pais, mision){
//         super(nombre, combustible, actividad, tipoDeNave, pais)
//         this.mision = mision;
//     }
// }