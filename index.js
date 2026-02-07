const scriptURL = 'https://script.google.com/macros/s/AKfycbwqONcN5soh2nhVXedQVKPB4dm6Qxla5xn4fkt9eD1UxIbznC2yb_axiwVXvOBJJ4Rs/exec';
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
