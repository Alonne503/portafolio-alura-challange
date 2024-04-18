const btnEnviar = document.getElementById('btn-enviar');
const formulario = document.getElementById('contactForm');

const validación = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre");
    nombre.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    direcciónEmail.focus();
    return false;
  }else{
    this.mostrarMensaje()
    this.reset();
    /*alert("Se envio el correo");
    Submit.focus();*/
    return true;
  }
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btnEnviar.addEventListener('click', validación);

function mostrarMensaje() {
    const alertaExito = document.createElement('P');
    alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
    alertaExito.textContent = 'Mensaje enviado correctamente';

    formulario.appendChild(alertaExito);
    setTimeout(() => {
        alertaExito.remove();
    }, 2000);
}

function reset(){
  email.email = '';
  email.asunto = '';
  email.mensaje = '';

  formulario.reset();
}