export default class Cl_mClinica {
    pacientes = [];
    contPacientes = 0;
    contProcedimientos = 0;
    contConsultas = 0;
    contControles = 0;
    totalRecaudado = 0;
    conDescuentos = 0;
    sinDescuentos = 0;
    totalDescuentos = 0;
    sumaEdad = 0;
    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
        this.contPacientes++;
        switch (paciente.tipoAtencion) {
            case 1:
                this.contProcedimientos++;
                break;
            case 2:
                this.contConsultas++;
                break;
            case 3:
                this.contControles++;
                break;
        }
        if (paciente.getDescuento() > 0) {
            this.conDescuentos++;
            this.totalDescuentos += paciente.getMontoDescuento();
        }
        else {
            this.sinDescuentos++;
        }
        this.sumaEdad += paciente.calcularEdad();
        this.totalRecaudado += paciente.getMontoPagar();
    }
    eliminarPaciente(index) {
        if (index >= 0 && index < this.pacientes.length) {
            const pacienteEliminado = this.pacientes[index];
            // Restar el monto del total recaudado
            this.totalRecaudado -= pacienteEliminado.getMontoPagar();
            this.sumaEdad -= pacienteEliminado.calcularEdad();
            // Actualizar contadores según el tipo de atención
            switch (pacienteEliminado.tipoAtencion) {
                case 1:
                    this.contProcedimientos--;
                    break;
                case 2:
                    this.contConsultas--;
                    break;
                case 3:
                    this.contControles--;
                    break;
            }
            // Actualizar contadores de descuento
            if (pacienteEliminado.getDescuento() > 0) {
                this.conDescuentos--;
            }
            else {
                this.sinDescuentos--;
            }
            // Eliminar el paciente del array
            this.pacientes.splice(index, 1);
            this.contPacientes--;
        }
    }
    //getters
    get pacientesLista() {
        return this.pacientes;
    }
    get totalPacientes() {
        return this.contPacientes;
    }
    get totalProcedimientos() {
        return this.contProcedimientos;
    }
    get totalConsultas() {
        return this.contConsultas;
    }
    get totalControles() {
        return this.contControles;
    }
    get totalRecaudadoValor() {
        return this.totalRecaudado;
    }
    get totalConDescuentos() {
        return this.conDescuentos;
    }
    get totalSinDescuentos() {
        return this.sinDescuentos;
    }
    get totalDescuentosValor() {
        return this.totalDescuentos;
    }
    get sumaEdadTotal() {
        return this.sumaEdad;
    }
    porcentajeDescuentos() {
        if (this.contPacientes === 0)
            return 0;
        return (this.conDescuentos / this.contPacientes) * 100;
    }
    porcentajeSinDescuentos() {
        if (this.contPacientes === 0)
            return 0;
        return (this.sinDescuentos / this.contPacientes) * 100;
    }
    porcentajeProcedimientos() {
        if (this.contPacientes === 0)
            return 0;
        return (this.contProcedimientos / this.contPacientes) * 100;
    }
    porcentajeConsultas() {
        if (this.contPacientes === 0)
            return 0;
        return (this.contConsultas / this.contPacientes) * 100;
    }
    porcentajeControles() {
        if (this.contPacientes === 0)
            return 0;
        return (this.contControles / this.contPacientes) * 100;
    }
    promedioEdad() {
        if (this.contPacientes === 0)
            return 0;
        return (this.sumaEdad / this.contPacientes);
    }
}
//# sourceMappingURL=Cl_mClinica.js.map