import { ESexo } from "../models/Cl_mPersona.js";

export interface I_vPaciente {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string;
    get sexo(): ESexo;
    get fechaNacimiento(): string;
    get tipoAtencion(): number;
    
   

    mostrar(): void;
    ocultar(): void;
    limpiar(): void;

    onAceptar (callback: () => void): void;
    onCancelar (callback: () => void): void;
}