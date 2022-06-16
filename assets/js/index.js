// Ejercicio 1
const a = function(){
    var imagen = document.querySelector('#img-border')
    imagen.classList.toggle('borde')
}


// Ejercicio Stickers
const bbbb = function(){
    c9 = document.getElementById('c9').valueAsNumber
    spirit = document.getElementById('spirit').valueAsNumber
    faze = document.getElementById('faze').valueAsNumber
    mensaje = document.getElementById('mensaje')
    total = c9+spirit+faze
    if(total < 0){
        mensaje.innerHTML = 'No se aceptan numeros negativos'
    } else if(total > 10){
        mensaje.innerHTML = 'Llevas demasiados stickers'
    } else if(total <= 10){
        mensaje.innerHTML = 'Llevas '+total+' Stickers'
    } else {
        mensaje.innerHTML = 'Introduce una opción correcta'
    }
}

// Ejercicio passwordS
const verify = function(){
    let contraseña1 = '911'
    let contraseña2 = '714'
    mensaje2 = document.getElementById('mensaje2')
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value
    num3 = document.getElementById('num3').value
    userpass = num1+num2+num3
    if (userpass == contraseña1){
        mensaje2.innerHTML = 'Password 1 correcto'
    } else if(userpass == contraseña2){
        mensaje2.innerHTML = 'Password 2 correcto'
    } else {
        mensaje2.innerHTML = 'Password incorrecto'
    }
}

