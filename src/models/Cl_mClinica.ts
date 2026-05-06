import Cl_mPaciente from "./Cl_mPaciente.js";

export default class Cl_mClinica {
    private pacientes: Cl_mPaciente[] = [];
    private contPacientes: number = 0;
    private contProcedimientos: number = 0;
    private contConsultas: number = 0;
    private contControles: number = 0;
    private totalRecaudado: number = 0;
    private conDescuentos: number = 0;
    private sinDescuentos: number = 0;
    private totalDescuentos: number = 0;
    private sumaEdad: number = 0;

    agregarPaciente(paciente: Cl_mPaciente): void {
        this.pacientes.push(paciente);
        this.contPacientes++;

        switch (paciente.tipoAtencion) {
            case 1: this.contProcedimientos++; break;
            case 2: this.contConsultas++; break;
            case 3: this.contControles++; break;
        }

        if (paciente.getDescuento() > 0) {
            this.conDescuentos++;
            this.totalDescuentos += paciente.getMontoDescuento();
        } else {
            this.sinDescuentos++;
        }

        this.sumaEdad += paciente.calcularEdad();

        this.totalRecaudado += paciente.getMontoPagar();
    }
    eliminarPaciente(index: number): void {
    if (index >= 0 && index < this.pacientes.length) {
        const pacienteEliminado = this.pacientes[index];
        
        // Restar el monto del total recaudado
        this.totalRecaudado -= pacienteEliminado.getMontoPagar();

        this.sumaEdad -= pacienteEliminado.calcularEdad();  
        
        // Actualizar contadores según el tipo de atención
        switch (pacienteEliminado.tipoAtencion) {
            case 1: this.contProcedimientos--; break;
            case 2: this.contConsultas--; break;
            case 3: this.contControles--; break;
        }
        
        // Actualizar contadores de descuento
        if (pacienteEliminado.getDescuento() > 0) {
            this.conDescuentos--;
        } else {
            this.sinDescuentos--;
        }
        
        // Eliminar el paciente del array
        this.pacientes.splice(index, 1);
        this.contPacientes--;
    }
}

    //getters
    get pacientesLista(): Cl_mPaciente[] {
        return this.pacientes;
    }
    get totalPacientes(): number {
        return this.contPacientes;
    }
    get totalProcedimientos(): number {
        return this.contProcedimientos;
    }
    get totalConsultas(): number {
        return this.contConsultas;
    }
    get totalControles(): number {
        return this.contControles;
    }
    get totalRecaudadoValor(): number {
        return this.totalRecaudado;
    }
    get totalConDescuentos(): number {
        return this.conDescuentos;
    }
    get totalSinDescuentos(): number {
        return this.sinDescuentos;
    }  
    get totalDescuentosValor(): number {
        return this.totalDescuentos;
    }
    get sumaEdadTotal(): number {
        return this.sumaEdad;
    } 

   porcentajeDescuentos(): number {
        if (this.contPacientes === 0) return 0;
        return (this.conDescuentos / this.contPacientes) * 100;
    }
    porcentajeSinDescuentos(): number {
        if (this.contPacientes === 0) return 0;
        return (this.sinDescuentos / this.contPacientes) * 100;
    }
    porcentajeProcedimientos(): number {
        if (this.contPacientes === 0) return 0;
        return (this.contProcedimientos / this.contPacientes) * 100;
    }
    porcentajeConsultas(): number {
        if (this.contPacientes === 0) return 0;
        return (this.contConsultas / this.contPacientes) * 100;
    }
    porcentajeControles(): number {
        if (this.contPacientes === 0) return 0;
        return (this.contControles / this.contPacientes) * 100;
    }
    promedioEdad(): number {
        if (this.contPacientes === 0) return 0;
        return (this.sumaEdad / this.contPacientes);
    }



}