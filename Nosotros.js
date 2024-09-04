console.log('Script de servicios cargado');

class Servicios {
    constructor(diseñoWeb, creacionDePaginasWeb, mantenimientoDePaginasWebs, diseñoDeAplicacionesMoviles, creacionDeBasesDeDatos) {
        // Validación básica
        this.diseñoWeb = diseñoWeb || 'No especificado';
        this.creacionDePaginasWeb = creacionDePaginasWeb || 'No especificado';
        this.mantenimientoDePaginasWebs = mantenimientoDePaginasWebs || 'No especificado';
        this.diseñoDeAplicacionesMoviles = diseñoDeAplicacionesMoviles || 'No especificado';
        this.creacionDeBasesDeDatos = creacionDeBasesDeDatos || 'No especificado';
    }

    // Método para almacenar en localStorage
    almacenarEnLocalStorage() {
        try {
            const servicios = {
                diseñoWeb: this.diseñoWeb,
                creacionDePaginasWeb: this.creacionDePaginasWeb,
                mantenimientoDePaginasWebs: this.mantenimientoDePaginasWebs,
                diseñoDeAplicacionesMoviles: this.diseñoDeAplicacionesMoviles,
                creacionDeBasesDeDatos: this.creacionDeBasesDeDatos
            };
            localStorage.setItem('losServicios', JSON.stringify(servicios));
        } catch (error) {
            console.error('Error al almacenar en localStorage:', error);
        }
    }

    // Método para recuperar datos de localStorage
    static recuperarDeLocalStorage() {
        try {
            const datos = localStorage.getItem('losServicios');
            if (datos) {
                const parsedData = JSON.parse(datos);
                return new Servicios(
                    parsedData.diseñoWeb,
                    parsedData.creacionDePaginasWeb,
                    parsedData.mantenimientoDePaginasWebs,
                    parsedData.diseñoDeAplicacionesMoviles,
                    parsedData.creacionDeBasesDeDatos
                );
            } else {
                console.log('No hay datos en localStorage.');
                return null;
            }
        } catch (error) {
            console.error('Error al recuperar de localStorage:', error);
            return null;
        }
    }

    // Método para mostrar datos
    mostrarDatos() {
        console.table({
            diseñoWeb: this.diseñoWeb,
            creacionDePaginasWeb: this.creacionDePaginasWeb,
            mantenimientoDePaginasWebs: this.mantenimientoDePaginasWebs,
            diseñoDeAplicacionesMoviles: this.diseñoDeAplicacionesMoviles,
            creacionDeBasesDeDatos: this.creacionDeBasesDeDatos
        });
    }
}

// Ejemplo de uso:
const misServicios = new Servicios('Desarrollo Web', 'Creación de Páginas Web', 'Mantenimiento de Páginas Webs', 'Diseño de Aplicaciones Móviles', 'Creación de Bases de Datos');
misServicios.almacenarEnLocalStorage();

// Recuperar los servicios desde localStorage y mostrar los datos
const serviciosRecuperados = Servicios.recuperarDeLocalStorage();
if (serviciosRecuperados) {
    serviciosRecuperados.mostrarDatos();
}