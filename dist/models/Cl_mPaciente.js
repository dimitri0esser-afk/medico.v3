import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mPaciente extends Cl_mPersona {
    _tipoAtencion = 0;
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento, tipoAtencion) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this.tipoAtencion = tipoAtencion;
    }
    //setter
    set tipoAtencion(tipoAtencion) {
        this._tipoAtencion = tipoAtencion;
    }
    //getter
    get tipoAtencion() {
        return this._tipoAtencion;
    }
    getNombreAtencion() {
        switch (this.tipoAtencion) {
            case 1: return "Procedimiento";
            case 2: return "Consulta";
            case 3: return "Control";
            default: return "Desconocido";
        }
    }
    getPrecioConsulta() {
        switch (this.tipoAtencion) {
            case 1: return 30; // Procedimiento
            case 2: return 10; // Consulta
            case 3: return 0; // Control
            default: return 0.00; // Desconocido
        }
    }
    getDescuento() {
        const edad = this.calcularEdad();
        if (this.esFemenino() && edad >= 25 && edad <= 50) { // ← Cambiar condición
            return 0.40; // 40% descuento
        }
        return 0;
    }
    getMontoDescuento() {
        return this.getPrecioConsulta() * this.getDescuento();
    }
    getMontoPagar() {
        return this.getPrecioConsulta() - this.getMontoDescuento();
    }
}
//# sourceMappingURL=Cl_mPaciente.js.map