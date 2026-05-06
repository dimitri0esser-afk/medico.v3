import { I_vClinica } from "../interfaces/I_vClinica.js";
import { I_vPaciente } from "../interfaces/I_vPaciente.js";
import Cl_mPaciente from "../models/Cl_mPaciente.js";
import Cl_mClinica from "../models/Cl_mClinica.js";
import { ESexo } from "../models/Cl_mPersona.js";  // ← IMPORTANTE: Agregar esta línea

export default class Cl_cClinica {
    private vistaPrincipal: I_vClinica;
    private vistaFormulario: I_vPaciente;
    private clinica: Cl_mClinica;

    constructor(vistaPrincipal: I_vClinica, vistaFormulario: I_vPaciente) {
        this.vistaPrincipal = vistaPrincipal;
        this.vistaFormulario = vistaFormulario;
        this.clinica = new Cl_mClinica(); 
        
        this.vistaPrincipal.onAgregarPaciente(() => this.mostrarFormulario());
         this.vistaPrincipal.onEliminarPaciente((index: number) => this.eliminarPaciente(index));
        this.vistaFormulario.onAceptar(() => this.aceptar());
        this.vistaFormulario.onCancelar(() => this.cancelar());

        
       
        this.cargarDatosDemostrativos();
    }

    
    private cargarDatosDemostrativos(): void {
        const pacientesDemo = [
            new Cl_mPaciente("Ana", "Gil", "8888", ESexo.FEMENINO, "1999-06-15", 1),
            new Cl_mPaciente("Mery", "Paz", "6666", ESexo.FEMENINO, "2009-07-25", 1),
            new Cl_mPaciente("Juan", "Sanz", "9999", ESexo.MASCULINO, "1980-09-20", 1),
            new Cl_mPaciente("Paty", "Ortiz", "3333", ESexo.FEMENINO, "1970-05-14", 3),
            new Cl_mPaciente("Liz", "Ramos", "2222", ESexo.FEMENINO, "1995-01-03", 1),
            new Cl_mPaciente("Raul", "Mendez", "5555", ESexo.MASCULINO, "1995-10-11", 2),
            new Cl_mPaciente("Tony", "Flores", "7777", ESexo.MASCULINO, "2008-08-07", 3),
            new Cl_mPaciente("Gaby", "Lopez", "1111", ESexo.FEMENINO, "1966-07-19", 1),
        ];

        for (const paciente of pacientesDemo) {
            this.clinica.agregarPaciente(paciente);
        }
        this.actualizarVista();
    }

    private actualizarVista(): void {
        this.vistaPrincipal.reportarTotales({
            totalRecaudado: this.clinica.totalRecaudadoValor,
            totalPacientes: this.clinica.totalPacientes,
            totalDescuentos: this.clinica.totalDescuentosValor
        });

        this.vistaPrincipal.reportarPorcentajesAtencion({
            procedimiento: this.clinica.porcentajeProcedimientos(),
            consulta: this.clinica.porcentajeConsultas(), 
            control: this.clinica.porcentajeControles()    
        });

        this.vistaPrincipal.reportarPorcentajesDescuento({
            conDescuento: this.clinica.porcentajeDescuentos(),
            sinDescuento: this.clinica.porcentajeSinDescuentos()
        });

        this.vistaPrincipal.reportarPromedio({
            promedioEdad: this.clinica.promedioEdad()
        });

        const lista = this.clinica.pacientesLista.map(p => ({
            nombre: p.nombre,
            apellido: p.apellido,
            cedula: p.cedula,
            sexo: p.getSexoTexto(),
            fechaNacimiento: p.fechaNacimiento,
            edad: p.calcularEdad(),
            tipoAtencion: p.tipoAtencion === 1 ? "Procedimiento" : p.tipoAtencion === 2 ? "Consulta" : "Control",
            costo: p.getPrecioConsulta(),
            descuento: p.getMontoDescuento(),
            montoPagar: p.getMontoPagar()
        }));
        this.vistaPrincipal.reportarLista(lista);
    }

    private mostrarFormulario(): void {
        this.vistaFormulario.limpiar();
        this.vistaFormulario.mostrar();
    }

    private cancelar(): void {
        this.vistaFormulario.ocultar();
        this.vistaFormulario.limpiar();
    }

    private aceptar(): void {
        const paciente = new Cl_mPaciente(
            this.vistaFormulario.nombre,
            this.vistaFormulario.apellido,
            this.vistaFormulario.cedula,
            this.vistaFormulario.sexo,
            this.vistaFormulario.fechaNacimiento,
            this.vistaFormulario.tipoAtencion
        );
        this.clinica.agregarPaciente(paciente);
        this.actualizarVista();
        this.vistaFormulario.ocultar();
        this.vistaFormulario.limpiar();
    }
    private eliminarPaciente(index: number): void {
        this.clinica.eliminarPaciente(index);
        this.actualizarVista(); 
    }
}