let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || []; 

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function registrar() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("emailRegistro").value;
    var clave = document.getElementById("passwordRegistro").value;

    // Validar si el correo ya está registrado
    if (usuariosRegistrados.find(usuario => usuario.correo === correo)) {
        alert("Este correo ya está registrado. Por favor, utiliza otro.");
        return;
    }

    // Si no está registrado, agregar al array y almacenar en localStorage
    usuariosRegistrados.push({ nombre: nombre, correo: correo, clave: clave });
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

    alert("Registro exitoso. Inicia sesión para continuar.");
    showLoginForm(); // Mostrar formulario de inicio de sesión
}

function login() {
    var correo = document.getElementById("emailLogin").value;
    var clave = document.getElementById("passwordLogin").value;

    // Validar si el correo está registrado
    var usuario = usuariosRegistrados.find(usuario => usuario.correo === correo);
    if (!usuario) {
        alert("Correo no registrado. Por favor, regístrate.");
        return;
    }

    // Validar la contraseña
    if (usuario.clave !== clave) {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
        return;
    }

    // Redirigir a la página de inicio
    window.location.href = "tienda.html";
}

// Mostrar formulario de inicio de sesión por defecto al cargar la página
showLoginForm();
