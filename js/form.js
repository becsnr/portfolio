emailjs.init("zHU9oy_Qog4XQ2n6G");

const form = document.querySelector(".contato-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_jz62z4p', 'template_rvf3yy9', this)
        .then(function() {
            alert('E-mail enviado com sucesso!');
            form.reset();
        }, function(error) {
            alert('Erro ao enviarr...' + JSON.stringify(error));
        });
})