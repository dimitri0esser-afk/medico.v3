import { I_vPaciente } from "../interfaces/I_vPaciente.js";
import { ESexo } from "../models/Cl_mPersona.js";

export default class Cl_vPacientePlain implements I_vPaciente {
    inNombre: HTMLInputElement;
    inApellido: HTMLInputElement;
    inCedula: HTMLInputElement;
    inSexo: HTMLSelectElement;
    inFechaNacimiento: HTMLInputElement;
    inTipoAtencion: HTMLSelectElement;

    btAceptar: HTMLButtonElement;
    btCancelar: HTMLButtonElement;
    vista: HTMLElement;


    constructor() {
        this.inNombre = document.getElementById("paciente_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("paciente_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("paciente_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("paciente_inSexo") as HTMLSelectElement;
        this.inFechaNacimiento = document.getElementById("paciente_inFechaNacimiento") as HTMLInputElement;
        this.inTipoAtencion = document.getElementById("paciente_inTipoAtencion") as HTMLSelectElement;
        this.btAceptar = document.getElementById("paciente_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("paciente_btCancelar") as HTMLButtonElement;
        this.vista = document.getElementById("paciente") as HTMLElement;
    }

    // Getters
    get nombre(): string {return this.inNombre?.value.trim() || "";}
    get apellido(): string {return this.inApellido?.value.trim() || "";}
    get cedula(): string {return this.inCedula?.value.trim() || "";}
    get sexo(): ESexo { return this.inSexo?.value === "M" ? ESexo.MASCULINO : ESexo.FEMENINO; }
    get fechaNacimiento(): string { return this.inFechaNacimiento?.value || ""; }
    get tipoAtencion(): number { return parseInt(this.inTipoAtencion?.value) || 1; }

    
    mostrar(): void { if (this.vista) this.vista.classList.remove("hidden"); }
    ocultar(): void { if (this.vista) this.vista.classList.add("hidden"); }

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