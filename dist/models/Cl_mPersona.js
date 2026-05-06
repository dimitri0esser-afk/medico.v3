export var ESexo;
(function (ESexo) {
    ESexo["MASCULINO"] = "M";
    ESexo["FEMENINO"] = "F";
})(ESexo || (ESexo = {}));
export default class Cl_mPersona {
    _nombre = "";
    _apellido = "";
    _cedula = "";
    _sexo = ESexo.MASCULINO;
    _fechaNacimiento = "";
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
    }
    //setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }
    //getters
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get cedula() {
        return this._cedula;
    }
    get sexo() { return this._sexo; }
    esMasculino() { return this._sexo === ESexo.MASCULINO; }
    esFemenino() { return this._sexo === ESexo.FEMENINO; }
    getSexoTexto() {
        return this._sexo === ESexo.MASCULINO ? 'Masculino' : 'Femenino';
    }
    get fechaNacimiento() {
        return this._fechaNacimiento;
    }
    calcularEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this._fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        const dia = hoy.getDate() - nacimiento.getDate();
        // Si aún no ha cumplido años este año, restar 1
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }
        return edad;
    }
    esMenorEdad() {
        return this.calcularEdad() < 18;
    }
    /**
     * Verifica si es tercera edad
     * - Mujeres: > 50 años
     * - Hombres: > 60 años
     */
    esTerceraEdad() {
        const edad = this.calcularEdad();
        if (this.esFemenino())
            return edad > 50;
        return edad > 60; // Masculino
    }
    /**
     * Verifica si es mujer joven (25-50 años)
     * Útil para el proyecto MÉDICO
     */
    esMujerJoven() {
        const edad = this.calcularEdad();
        return this.esFemenino() && edad >= 25 && edad <= 50;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map