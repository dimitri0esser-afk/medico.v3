export interface I_vClinica {
    reportarTotales(datos: {
        totalRecaudado: number;
        totalPacientes: number;
        totalDescuentos: number;
    }): void;
    
    reportarPorcentajesAtencion(datos: {
        procedimiento: number;   // porcentaje
        consulta: number;        // porcentaje
        control: number;         // porcentaje
    }): void;
    
    reportarPorcentajesDescuento(datos: {
        conDescuento: number;    // porcentaje
        sinDescuento: number;    // porcentaje
    }): void;

    reportarPromedio(datos:{
        promedioEdad: number;
    }): void;
    
    reportarLista(lista: Array<{
        nombre: string;
        apellido: string;
        cedula: string;
        sexo: string;
        fechaNacimiento: string;
        edad: number;
        tipoAtencion: string;
        costo: number;
        descuento: number;
        montoPagar: number;
    }>): void;
    
    onAgregarPaciente(callback: () => void): void;
    onEliminarPaciente(callback: (index: number) => void): void;
}