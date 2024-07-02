// Función para desplazar el texto del banner
let temporizador;

function desplazarTexto(){
    var texto = document.getElementById("capaTexto").innerHTML;
    texto = texto.substring(1, texto.length) + texto.substring(0,1);
    document.getElementById("capaTexto").innerHTML = texto;
}

function arrancarRotativo(){
    temporizador = setInterval(desplazarTexto, 100);
}

function detenerRotativo(){
    clearInterval(temporizador);
}

// Función para añadir productos al carrito y guardarlos en localStorage
function addToCart(product, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
}

// Función para filtrar productos por categoría
function filterProducts(category) {
    const items = document.querySelectorAll('.content-item');
    
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Inicializar el contador del carrito cuando la página se carga
window.onload = updateCartCount;
