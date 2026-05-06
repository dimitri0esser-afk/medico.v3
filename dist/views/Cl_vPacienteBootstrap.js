import { ESexo } from "../models/Cl_mPersona.js";
export default class Cl_vPacienteBootstrap {
    modal;
    inNombre;
    inApellido;
    inCedula;
    inSexo;
    inFechaNacimiento;
    inTipoAtencion;
    btAceptar;
    btCancelar;
    vista;
    constructor() {
        this.vista = document.getElementById("pacienteModal");
        this.inNombre = document.getElementById("paciente_inNombre");
        this.inApellido = document.getElementById("paciente_inApellido");
        this.inCedula = document.getElementById("paciente_inCedula");
        this.inSexo = document.getElementById("paciente_inSexo");
        this.inFechaNacimiento = document.getElementById("paciente_inFechaNacimiento");
        this.inTipoAtencion = document.getElementById("paciente_inTipoAtencion");
        this.btAceptar = document.getElementById("paciente_btAceptar");
        this.btCancelar = document.getElementById("paciente_btCancelar");
        // Inicializar modal de Bootstrap
        const modalElement = document.getElementById("pacienteModal");
        if (modalElement) {
            this.modal = new window.bootstrap.Modal(modalElement);
        }
    }
    get nombre() { return this.inNombre?.value.trim() || ""; }
    get apellido() { return this.inApellido?.value.trim() || ""; }
    get cedula() { return this.inCedula?.value.trim() || ""; }
    get sexo() { return this.inSexo?.value === "M" ? ESexo.MASCULINO : ESexo.FEMENINO; }
    get fechaNacimiento() { return this.inFechaNacimiento?.value || ""; }
    get tipoAtencion() { return parseInt(this.inTipoAtencion?.value) || 1; }
    mostrar() { if (this.modal)
        this.modal.show(); }
    ocultar() { if (this.modal)
        this.modal.hide(); }
    onAceptar(callback) { if (this.btAceptar)
        this.btAceptar.onclick = callback; }
    onCancelar(callback) { if (this.btCancelar)
        this.btCancelar.onclick = callback; }
    limpiar() {
        if (this.inNombre)
            this.inNombre.value = "";
        if (this.inApellido)
            this.inApellido.value = "";
        if (this.inCedula)
            this.inCedula.value = "";
        if (this.inSexo)
            this.inSexo.value = "M";
        if (this.inFechaNacimiento)
            this.inFechaNacimiento.value = "";
        if (this.inTipoAtencion)
            this.inTipoAtencion.value = "1";
    }
}
//# sourceMappingURL=Cl_vPacienteBootstrap.js.map