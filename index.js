const scriptURL = 'https://script.google.com/macros/s/AKfycbw4ORn6KqCIzOF-mzKbvAEXEzswp-U3zJ80etus515NQ5F6UblYsQ_3PHIhJtqewIKD/exec';
const form = document.getElementById('form-encuesta');
const btn = document.getElementById('btn-enviar');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Enviando...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("¡Guardado con éxito en Cleanpisimo!");
        form.reset();
        btn.disabled = false;
        btn.innerText = "Enviar mi opinión";
    })
    .catch(error => {
        alert("Error al guardar. Revisa la conexión.");
        btn.disabled = false;
        btn.innerText = "Enviar mi opinión";
    });
});
