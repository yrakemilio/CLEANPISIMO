// Tu URL de Apps Script (la que me acabas de pasar)
const scriptURL = 'https://script.google.com/macros/s/AKfycbyqTZY3jKziN-ZvLP-pdFBUKKwU0fA-Mrr6oXXV0pcG9EKw67mavvIY0SyIZbHpBixV/exec';

const form = document.getElementById('form-encuesta');
const btn = document.getElementById('btn-enviar');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Cambiamos el estado del botón para que el usuario sepa que se está enviando
  btn.disabled = true;
  btn.innerText = "Enviando...";

  // Enviamos los datos a la hoja de Google
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("¡Muchas gracias! Tu opinión ha sido registrada con éxito.");
        btn.disabled = false;
        btn.innerText = "Enviar Encuesta";
        form.reset(); // Limpia el formulario para un nuevo uso
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Hubo un error al enviar la encuesta. Por favor, inténtalo de nuevo.");
        btn.disabled = false;
        btn.innerText = "Enviar Encuesta";
    });
});
