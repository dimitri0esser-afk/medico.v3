export default class Cl_vClinicaBootstrap {
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
    btnAgregar;
    vista;
    onEliminarCallback = null;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
        this.lblTotalRecaudado = document.getElementById("clinica_lblTotalRecaudado");
        this.lblTotalPacientes = document.getElementById("clinica_lblTotalPacientes");
        this.lblTotalDescuentos = document.getElementById("clinica_lblTotalDescuentos");
        this.lblPorcentajeProcedimiento = document.getElementById("clinica_lblPorcentajeProcedimiento");
        this.lblPorcentajeConsulta = document.getElementById("clinica_lblPorcentajeConsulta");
        this.lblPorcentajeControl = document.getElementById("clinica_lblPorcentajeControl");
        this.lblPorcentajeConDescuento = document.getElementById("clinica_lblPorcentajeConDescuento");
        this.lblPorcentajeSinDescuento = document.getElementById("clinica_lblPorcentajeSinDescuento");
        this.lblPromedioEdad = document.getElementById("clinica_lblPromedioEdad");
        this.tbodyLista = document.getElementById("clinica_tbodyLista");
        this.btnAgregar = document.getElementById("body_btnAgregarPaciente");
    }
    reportarTotales(datos) {
        if (this.lblTotalRecaudado)
            this.lblTotalRecaudado.innerHTML = "$" + datos.totalRecaudado.toFixed(2);
        if (this.lblTotalPacientes)
            this.lblTotalPacientes.innerHTML = datos.totalPacientes.toString();
        if (this.lblTotalDescuentos)
            this.lblTotalDescuentos.innerHTML = "$" + datos.totalDescuentos.toFixed(2);
    }
    reportarPorcentajesAtencion(datos) {
        if (this.lblPorcentajeProcedimiento)
            this.lblPorcentajeProcedimiento.innerHTML = datos.procedimiento.toFixed(2) + "%";
        if (this.lblPorcentajeConsulta)
            this.lblPorcentajeConsulta.innerHTML = datos.consulta.toFixed(2) + "%";
        if (this.lblPorcentajeControl)
            this.lblPorcentajeControl.innerHTML = datos.control.toFixed(2) + "%";
    }
    reportarPorcentajesDescuento(datos) {
        if (this.lblPorcentajeConDescuento)
            this.lblPorcentajeConDescuento.innerHTML = datos.conDescuento.toFixed(2) + "%";
        if (this.lblPorcentajeSinDescuento)
            this.lblPorcentajeSinDescuento.innerHTML = datos.sinDescuento.toFixed(2) + "%";
    }
    reportarPromedio(datos) {
        if (this.lblPromedioEdad)
            this.lblPromedioEdad.innerHTML = datos.promedioEdad.toFixed(2);
    }
    reportarLista(lista) {
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
                    const index = parseInt(e.target.getAttribute('data-index') || '0');
                    if (this.onEliminarCallback) {
                        this.onEliminarCallback(index);
                    }
                });
            });
        }
    }
    onAgregarPaciente(callback) {
        if (this.btnAgregar)
            this.btnAgregar.onclick = callback;
    }
    onEliminarPaciente(callback) {
        this.onEliminarCallback = callback;
    }
    mostrar() {
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vClinicaBootstrap.js.map