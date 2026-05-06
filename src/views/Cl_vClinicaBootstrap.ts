import { I_vClinica } from "../interfaces/I_vClinica.js";

export default class Cl_vClinicaBootstrap implements I_vClinica {
    private lblTotalRecaudado: HTMLElement;
    private lblTotalPacientes: HTMLElement;
    private lblTotalDescuentos: HTMLElement;
    private lblPorcentajeProcedimiento: HTMLElement;
    private lblPorcentajeConsulta: HTMLElement;
    private lblPorcentajeControl: HTMLElement;
    private lblPorcentajeConDescuento: HTMLElement;
    private lblPorcentajeSinDescuento: HTMLElement;
    private lblPromedioEdad: HTMLElement;
    private tbodyLista: HTMLElement;
    private btnAgregar: HTMLButtonElement;
    private vista: HTMLElement;
    private onEliminarCallback: ((index: number) => void) | null = null;

    constructor() {
        this.vista = document.getElementById("app-bootstrap") as HTMLElement;
        this.lblTotalRecaudado = document.getElementById("clinica_lblTotalRecaudado") as HTMLElement;
        this.lblTotalPacientes = document.getElementById("clinica_lblTotalPacientes") as HTMLElement;
        this.lblTotalDescuentos = document.getElementById("clinica_lblTotalDescuentos") as HTMLElement;
        this.lblPorcentajeProcedimiento = document.getElementById("clinica_lblPorcentajeProcedimiento") as HTMLElement;
        this.lblPorcentajeConsulta = document.getElementById("clinica_lblPorcentajeConsulta") as HTMLElement;
        this.lblPorcentajeControl = document.getElementById("clinica_lblPorcentajeControl") as HTMLElement;
        this.lblPorcentajeConDescuento = document.getElementById("clinica_lblPorcentajeConDescuento") as HTMLElement;
        this.lblPorcentajeSinDescuento = document.getElementById("clinica_lblPorcentajeSinDescuento") as HTMLElement;
        this.lblPromedioEdad = document.getElementById("clinica_lblPromedioEdad") as HTMLElement;
        this.tbodyLista = document.getElementById("clinica_tbodyLista") as HTMLElement;
        this.btnAgregar = document.getElementById("body_btnAgregarPaciente") as HTMLButtonElement;
    }

    reportarTotales(datos: {
        totalRecaudado: number;
        totalPacientes: number;
        totalDescuentos: number;
    }): void {
        if (this.lblTotalRecaudado) this.lblTotalRecaudado.innerHTML = "$" + datos.totalRecaudado.toFixed(2);
        if (this.lblTotalPacientes) this.lblTotalPacientes.innerHTML = datos.totalPacientes.toString();
        if (this.lblTotalDescuentos) this.lblTotalDescuentos.innerHTML = "$" + datos.totalDescuentos.toFixed(2);
    }

    reportarPorcentajesAtencion(datos: {
        procedimiento: number;
        consulta: number;
        control: number;
    }): void {
        if (this.lblPorcentajeProcedimiento) this.lblPorcentajeProcedimiento.innerHTML = datos.procedimiento.toFixed(2) + "%";
        if (this.lblPorcentajeConsulta) this.lblPorcentajeConsulta.innerHTML = datos.consulta.toFixed(2) + "%";
        if (this.lblPorcentajeControl) this.lblPorcentajeControl.innerHTML = datos.control.toFixed(2) + "%";
    }

    reportarPorcentajesDescuento(datos: {
        conDescuento: number;
        sinDescuento: number;
    }): void {
        if (this.lblPorcentajeConDescuento) this.lblPorcentajeConDescuento.innerHTML = datos.conDescuento.toFixed(2) + "%";
        if (this.lblPorcentajeSinDescuento) this.lblPorcentajeSinDescuento.innerHTML = datos.sinDescuento.toFixed(2) + "%";
    }
    reportarPromedio(datos: { 
        promedioEdad: number; 
    }): void {
        if (this.lblPromedioEdad) this.lblPromedioEdad.innerHTML = datos.promedioEdad.toFixed(2);
    }

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
    }>): void {
         if (this.tbodyLista) {
            let html = "";
            for (let i = 0; i < lista.length; i++) {
                const item = lista[i];
                html += `<tr>`;
                html += `<td>${i + 1}</td>`;
                html += `<td>${item.nombre}</td>`;
                html += `<td>${item.apellido}</td>`;
                html += `<td>${item.cedula}</td>`;
                html += `<td>${item.sexo}</td>`;
                html += `<td>${item.fechaNacimiento}</td>`;
                html += `<td>${item.edad}</td>`;
                html += `<td>${item.tipoAtencion}</td>`;
                html += `<td>$${item.costo}</td>`;
                html += `<td>$${item.descuento}</td>`;
                html += `<td>$${item.montoPagar}</td>`;
                html += `<td><button class="btn btn-light btn-sm btn-eliminar" data-index="${i}">Eliminar</button></td>`;
                html += `</tr>`;
            }
            this.tbodyLista.innerHTML = html;
            const botonesEliminar = document.querySelectorAll('.btn-eliminar');
            botonesEliminar.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt((e.target as HTMLButtonElement).getAttribute('data-index') || '0');
                    if (this.onEliminarCallback) {
                        this.onEliminarCallback(index);
                    }
                });
            });
        }
    }

    onAgregarPaciente(callback: () => void): void {
        if (this.btnAgregar) this.btnAgregar.onclick = callback;
    }
    onEliminarPaciente(callback: (index: number) => void): void {
        this.onEliminarCallback = callback;
    }

    mostrar(): void {
        if (this.vista) this.vista.hidden = false;
    }

    ocultar(): void {
        if (this.vista) this.vista.hidden = true;
    }
}