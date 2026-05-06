import Cl_mPersona, { ESexo } from "./Cl_mPersona.js";

export default class Cl_mPaciente extends Cl_mPersona {
    private _tipoAtencion: number = 0;

    constructor(nombre: string, apellido: string, cedula: string, sexo: ESexo, fechaNacimiento: string, tipoAtencion: number) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this.tipoAtencion = tipoAtencion;
    }

    //setter
    set tipoAtencion(tipoAtencion: number) {
        this._tipoAtencion = tipoAtencion;
    }
    //getter
    get tipoAtencion(): number {
        return this._tipoAtencion;
    }

    getNombreAtencion(): string {
        switch (this.tipoAtencion) {
            case 1: return "Procedimiento";
            case 2: return "Consulta";
            case 3: return "Control";
            default: return "Desconocido";
        }
    }
    getPrecioConsulta(): number {
        switch (this.tipoAtencion) {
            case 1: return 30; // Procedimiento
            case 2: return 10;  // Consulta
            case 3: return 0;  // Control
            default: return 0.00;   // Desconocido
        }
    }

    getDescuento(): number {
        const edad = this.calcularEdad();
        if (this.esFemenino() && edad >= 25 && edad <= 50) {  // ← Cambiar condición
            return 0.40;  // 40% descuento
        }
        return 0;
    }
   
    getMontoDescuento(): number { // Monto del Descuento (osea dolares coño)
        return this.getPrecioConsulta() * this.getDescuento();
    }
     getMontoPagar(): number {
        return this.getPrecioConsulta() - this.getMontoDescuento();
    }
}
   
