document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Previene el envío del formulario para manejarlo con JavaScript
  
      // Obtención de datos del formulario
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const idnumber = document.getElementById('idnumber').value;
      const opinion = document.querySelector('input[name="opinion"]:checked')?.value;
  
      // Verificación de datos
      if (!opinion) {
        alert('Por favor, seleccione una opinión.');
        return;
      }
  
      // Mostrar datos en consola o procesarlos
      console.log('Nombre:', fname);
      console.log('Apellido:', lname);
      console.log('Número de Identidad:', idnumber);
      console.log('Opinión:', opinion);
  
      // Aquí puedes realizar acciones como enviar los datos a un servidor o almacenarlos localmente
      // Ejemplo:
      // const formData = {
      //   fname,
      //   lname,
      //   idnumber,
      //   opinion
      // };
      // localStorage.setItem('formData', JSON.stringify(formData));
  
      alert('Gracias por su respuesta.'); // Mensaje de confirmación
    });
  });
  