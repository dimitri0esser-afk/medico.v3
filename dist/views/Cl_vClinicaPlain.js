export default class Cl_vClinicaPlain {
    lblTotalRecaudado;
    lblTotalPacientes;
    lblTotalDescuentos;
    lblPorcentajeProcedimiento;
    lblPorcentajeConsulta;
    lblPorcentajeControl;
    lblPorcentajeConDescuento;
    lblPorcentajeSinDescuento;
    lblPromedioEdad;
    tbodyLista;
    btAgregarPaciente;
    vista;
    onEliminarCallback = null;
    constructor() {
        this.vista = document.getElementById("body");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblTotalPacientes = document.getElementById("body_lblTotalPacientes");
        this.lblTotalDescuentos = document.getElementById("body_lblTotalDescuentos");
        this.lblPorcentajeProcedimiento = document.getElementById("body_lblPorcentajeProcedimiento");
        this.lblPorcentajeConsulta = document.getElementById("body_lblPorcentajeConsulta");
        this.lblPorcentajeControl = document.getElementById("body_lblPorcentajeControl");
        this.lblPorcentajeConDescuento = document.getElementById("body_lblPorcentajeConDescuento");
        this.lblPorcentajeSinDescuento = document.getElementById("body_lblPorcentajeSinDescuento");
        this.lblPromedioEdad = document.getElementById("body_lblPromedioEdad");
        this.tbodyLista = document.getElementById("body_tbodyLista");
        this.btAgregarPaciente = document.getElementById("body_btAgregarPaciente");
    }
    reportarTotales(datos) {
        if (this.lblTotalRecaudado)
            this.lblTotalRecaudado.innerHTML = `${datos.totalRecaudado.toFixed(2)}`;
        if (this.lblTotalPacientes)
            this.lblTotalPacientes.innerHTML = `${datos.totalPacientes}`;
        if (this.lblTotalDescuentos)
            this.lblTotalDescuentos.innerHTML = `${datos.totalDescuentos.toFixed(2)}`;
    }
    reportarPorcentajesAtencion(datos) {
        if (this.lblPorcentajeProcedimiento)
            this.lblPorcentajeProcedimiento.innerHTML = `${datos.procedimiento.toFixed(2)}%`;
        if (this.lblPorcentajeConsulta)
            this.lblPorcentajeConsulta.innerHTML = `${datos.consulta.toFixed(2)}%`;
        if (this.lblPorcentajeControl)
            this.lblPorcentajeControl.innerHTML = `${datos.control.toFixed(2)}%`;
    }
    reportarPorcentajesDescuento(datos) {
        if (this.lblPorcentajeConDescuento)
            this.lblPorcentajeConDescuento.innerHTML = `${datos.conDescuento.toFixed(2)}%`;
        if (this.lblPorcentajeSinDescuento)
            this.lblPorcentajeSinDescuento.innerHTML = `${datos.sinDescuento.toFixed(2)}%`;
    }
    reportarPromedio(datos) {
        if (this.lblPromedioEdad)
            this.lblPromedioEdad.innerHTML = `${datos.promedioEdad.toFixed(2)}`;
    }
    reportarLista(lista) {
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
                    const index = parseInt(e.target.getAttribute('data-index') || '0');
                    if (this.onEliminarCallback) {
                        this.onEliminarCallback(index);
                    }
                });
            });
        }
    }
    onEliminarPaciente(callback) {
        this.onEliminarCallback = callback;
    }
    onAgregarPaciente(callback) {
        if (this.btAgregarPaciente)
            this.btAgregarPaciente.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vClinicaPlain.js.map