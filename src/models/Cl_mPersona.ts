export enum ESexo {
    MASCULINO = 'M',
    FEMENINO = 'F'
}


export default class Cl_mPersona {
    private _nombre: string = "";
    private _apellido: string = "";
    private _cedula: string = "";
    private _sexo: ESexo = ESexo.MASCULINO;
    private _fechaNacimiento: string = "";

    constructor(nombre: string, apellido: string, cedula: string, sexo: ESexo, fechaNacimiento: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
    }
    //setters
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    set apellido(apellido: string) {
        this._apellido = apellido;
    }
    set cedula(cedula: string) {
        this._cedula = cedula;
    }
    set sexo(sexo: ESexo) {
        this._sexo = sexo;
    }
    set fechaNacimiento(fechaNacimiento: string) {
        this._fechaNacimiento = fechaNacimiento;
    }
    //getters
    get nombre(): string {
        return this._nombre;
    }
    get apellido(): string {
        return this._apellido;
    }
    get cedula(): string {
        return this._cedula;
    }
    get sexo(): ESexo { return this._sexo; }
    
    esMasculino(): boolean { return this._sexo === ESexo.MASCULINO; }
    esFemenino(): boolean { return this._sexo === ESexo.FEMENINO; }
    
    getSexoTexto(): string {
        return this._sexo === ESexo.MASCULINO ? 'Masculino' : 'Femenino';
    }
    get fechaNacimiento(): string {
        return this._fechaNacimiento;
    }

    calcularEdad(): number {
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

     esMenorEdad(): boolean {
        return this.calcularEdad() < 18;
    }
    
    /**
     * Verifica si es tercera edad
     * - Mujeres: > 50 años
     * - Hombres: > 60 años
     */
    esTerceraEdad(): boolean {
        const edad = this.calcularEdad();
        if (this.esFemenino()) return edad > 50;
        return edad > 60;  // Masculino
    }
    
    /**
     * Verifica si es mujer joven (25-50 años)
     * Útil para el proyecto MÉDICO
     */
    esMujerJoven(): boolean {
        const edad = this.calcularEdad();
        return this.esFemenino() && edad >= 25 && edad <= 50;
    }
}
