console.log ('')

class Servicios {
    constructor(diseñoWeb, creacionDePaginasWeb, mantenimientoDePaginasWebs, diseñoDeAplicacionesMoviles, creacionDeBasesDeDatos) {
        this.diseñoWeb = diseñoWeb;
        this.creacionDePaginasWeb = creacionDePaginasWeb;
        this.mantenimientoDePaginasWebs = mantenimientoDePaginasWebs;
        this.diseñoDeAplicacionesMoviles = diseñoDeAplicacionesMoviles;
        this.creacionDeBasesDeDatos = creacionDeBasesDeDatos;
    }

    // Método para almacenar en localStorage
    almacenarEnLocalStorage() {
        const servicios = {
            diseñoWeb: this.diseñoWeb,
            creacionDePaginasWeb: this.creacionDePaginasWeb,
            mantenimientoDePaginasWebs: this.mantenimientoDePaginasWebs,
            diseñoDeAplicacionesMoviles: this.diseñoDeAplicacionesMoviles,
            creacionDeBasesDeDatos: this.creacionDeBasesDeDatos
        };
        localStorage.setItem('losServicios', JSON.stringify(servicios));
    }

    // Método para recuperar datos de localStorage
    static recuperarDeLocalStorage() {
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
    }

    // Método para mostrar datos
    mostrarDatos() {
        console.log('Servicios:', {
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
misServicios.almacenarLocalStorageEn();

// Recuperar los servicios desde localStorage y mostrar los datos
const serviciosRecuperados = Servicios.recuperarDeLocalStorage();
if (serviciosRecuperados) {
    serviciosRecuperados.mostrarDatos();
}
