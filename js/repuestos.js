window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    this.console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/1;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 2s ease-out'
    }
})