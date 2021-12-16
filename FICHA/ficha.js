function user() {
    var login = document.getElementById('usuario');

    login.classList.add('login_aparecer');

}

function fechar() {
    var login = document.getElementById('usuario');

    login.classList.remove('login_aparecer');

}

// ---- Abrir Ficha ----

function abrir_ficha() {
    var carrossel = document.getElementById('carouselExampleIndicators');
    var ficha = document.getElementById('ficha');
    var mais = document.getElementById('mais');
    var menos = document.getElementById('menos');

    ficha.classList.add('ficha_mostrar');
    mais.classList.add('mais_aparecer');
    menos.classList.add('menos_aparecer');
    carrossel.classList.remove('aparecer_carrossel');
}

function fechar_ficha() {
    var carrossel = document.getElementById('carouselExampleIndicators');
    var mais = document.getElementById('mais');
    var menos = document.getElementById('menos');
    var ficha = document.getElementById('ficha');

    ficha.classList.remove('ficha_mostrar');
    mais.classList.remove('mais_aparecer');
    menos.classList.remove('menos_aparecer');
    carrossel.classList.add('aparecer_carrossel');

}

