import { I_vPaciente } from "../interfaces/I_vPaciente.js";
import { ESexo } from "../models/Cl_mPersona.js";

export default class Cl_vPacienteBootstrap implements I_vPaciente {
    private modal: any;
    private inNombre: HTMLInputElement;
    private inApellido: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLSelectElement;
    private inFechaNacimiento: HTMLInputElement;
    private inTipoAtencion: HTMLSelectElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("pacienteModal") as HTMLElement;
        this.inNombre = document.getElementById("paciente_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("paciente_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("paciente_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("paciente_inSexo") as HTMLSelectElement;
        this.inFechaNacimiento = document.getElementById("paciente_inFechaNacimiento") as HTMLInputElement;
        this.inTipoAtencion = document.getElementById("paciente_inTipoAtencion") as HTMLSelectElement;
        this.btAceptar = document.getElementById("paciente_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("paciente_btCancelar") as HTMLButtonElement;
        
        // Inicializar modal de Bootstrap
        const modalElement = document.getElementById("pacienteModal");
        if (modalElement) {
            this.modal = new (window as any).bootstrap.Modal(modalElement);
        }
    }

    get nombre(): string { return this.inNombre?.value.trim() || ""; }
    get apellido(): string { return this.inApellido?.value.trim() || ""; }
    get cedula(): string { return this.inCedula?.value.trim() || ""; }
    get sexo(): ESexo { return this.inSexo?.value === "M" ? ESexo.MASCULINO : ESexo.FEMENINO; }
    get fechaNacimiento(): string { return this.inFechaNacimiento?.value || ""; }
    get tipoAtencion(): number { return parseInt(this.inTipoAtencion?.value) || 1; }

    mostrar(): void { if (this.modal) this.modal.show(); }
    ocultar(): void { if (this.modal) this.modal.hide(); }

    onAceptar(callback: () => void): void { if (this.btAceptar) this.btAceptar.onclick = callback; }
    onCancelar(callback: () => void): void { if (this.btCancelar) this.btCancelar.onclick = callback; }

    limpiar(): void {
        if (this.inNombre) this.inNombre.value = "";
        if (this.inApellido) this.inApellido.value = "";
        if (this.inCedula) this.inCedula.value = "";
        if (this.inSexo) this.inSexo.value = "M";
        if (this.inFechaNacimiento) this.inFechaNacimiento.value = "";
        if (this.inTipoAtencion) this.inTipoAtencion.value = "1";
    }
}