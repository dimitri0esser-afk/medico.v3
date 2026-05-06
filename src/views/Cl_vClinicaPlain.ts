import { I_vClinica } from "../interfaces/I_vClinica";  

export default class Cl_vClinicaPlain implements I_vClinica {
    lblTotalRecaudado: HTMLElement;
    lblTotalPacientes: HTMLElement;
    lblTotalDescuentos: HTMLElement;
    lblPorcentajeProcedimiento: HTMLElement;
    lblPorcentajeConsulta: HTMLElement;
    lblPorcentajeControl: HTMLElement;
    lblPorcentajeConDescuento: HTMLElement;
    lblPorcentajeSinDescuento: HTMLElement;
    lblPromedioEdad: HTMLElement;
    tbodyLista: HTMLElement;
    btAgregarPaciente: HTMLButtonElement;
    vista: HTMLElement | null;
    private onEliminarCallback: ((index: number) => void) | null = null;

    constructor() {
        this.vista = document.getElementById("body") as HTMLElement;
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado") as HTMLElement;
        this.lblTotalPacientes = document.getElementById("body_lblTotalPacientes") as HTMLElement;
        this.lblTotalDescuentos = document.getElementById("body_lblTotalDescuentos") as HTMLElement;
        this.lblPorcentajeProcedimiento = document.getElementById("body_lblPorcentajeProcedimiento") as HTMLElement;
        this.lblPorcentajeConsulta = document.getElementById("body_lblPorcentajeConsulta") as HTMLElement;
        this.lblPorcentajeControl = document.getElementById("body_lblPorcentajeControl") as HTMLElement;
        this.lblPorcentajeConDescuento = document.getElementById("body_lblPorcentajeConDescuento") as HTMLElement;
        this.lblPorcentajeSinDescuento = document.getElementById("body_lblPorcentajeSinDescuento") as HTMLElement;
        this.lblPromedioEdad = document.getElementById("body_lblPromedioEdad") as HTMLElement;
        this.tbodyLista = document.getElementById("body_tbodyLista") as HTMLElement;
        this.btAgregarPaciente = document.getElementById("body_btAgregarPaciente") as HTMLButtonElement;
    }

    reportarTotales(datos: { totalRecaudado: number; totalPacientes: number; totalDescuentos: number }): void {
        if (this.lblTotalRecaudado) this.lblTotalRecaudado.innerHTML = `${datos.totalRecaudado.toFixed(2)}`;
        if (this.lblTotalPacientes) this.lblTotalPacientes.innerHTML = `${datos.totalPacientes}`;
        if (this.lblTotalDescuentos) this.lblTotalDescuentos.innerHTML = `${datos.totalDescuentos.toFixed(2)}`;
    }
    reportarPorcentajesAtencion(datos: { procedimiento: number; consulta: number; control: number; }): void {
        if (this.lblPorcentajeProcedimiento) this.lblPorcentajeProcedimiento.innerHTML = `${datos.procedimiento.toFixed(2)}%`;
        if (this.lblPorcentajeConsulta) this.lblPorcentajeConsulta.innerHTML = `${datos.consulta.toFixed(2)}%`;
        if (this.lblPorcentajeControl) this.lblPorcentajeControl.innerHTML = `${datos.control.toFixed(2)}%`;
    }
    reportarPorcentajesDescuento(datos: { conDescuento: number; sinDescuento: number; }): void {
        if (this.lblPorcentajeConDescuento) this.lblPorcentajeConDescuento.innerHTML = `${datos.conDescuento.toFixed(2)}%`;
        if (this.lblPorcentajeSinDescuento) this.lblPorcentajeSinDescuento.innerHTML = `${datos.sinDescuento.toFixed(2)}%`;
    }
    reportarPromedio(datos: { promedioEdad: number; }): void {
        if (this.lblPromedioEdad) this.lblPromedioEdad.innerHTML = `${datos.promedioEdad.toFixed(2)}`;
    }
     reportarLista(lista: Array<{ nombre: string; apellido: string; cedula: string; sexo: string; fechaNacimiento: string; edad: number; tipoAtencion: string; costo: number; descuento: number; montoPagar: number; }>): void {
       if (this.tbodyLista) {
            let html = "";
            for (let i = 0; i < lista.length; i++) {
                const item = lista[i];
                html += "<tr>";
                html += "<td>" + (i + 1) + "</td>";
                html += "<td>" + item.nombre + "</td>";
                html += "<td>" + item.apellido + "</td>";
                html += "<td>" + item.cedula + "</td>";
                html += "<td>" + item.sexo + "</td>";
                html += "<td>" + item.fechaNacimiento + "</td>";
                html += "<td>" + item.edad + "</td>";
                html += "<td>" + item.tipoAtencion + "</td>";
                html += "<td>" + "$" + item.costo + "</td>";
                html += "<td>" + "$" + item.descuento + "</td>";
                html += "<td>" + "$" + item.montoPagar + "</td>";
                html += "<td><button class='btn-eliminar' data-index='" + i + "'>Eliminar</button></td>";
                html += "</tr>";
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
    onEliminarPaciente(callback: (index: number) => void): void {
        this.onEliminarCallback = callback;
    }

    onAgregarPaciente(callback: () => void): void {
        if (this.btAgregarPaciente) this.btAgregarPaciente.onclick = callback;
    }
    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
    }
    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
    }

}