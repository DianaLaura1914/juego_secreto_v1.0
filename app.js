
let intentos=1;
let listaNumerosSorteados=[];
let numeroMaximo = 10;
let numeroSecreto =generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);

     console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertasteee el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
//el usuario no acerto


        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor!!');
        }else {
            asignarTextoElemento('p','El número secreto es mayor!!');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numero
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else {

    
    //si el numero generado está incluido en la lista
    
    if(listaNumerosSorteados.includes(numeroGenerado)){
         return generarNumeroSecreto();
    }else {
         listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
    }
        }
 }

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secretoooo!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intentos =1; 
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
   
    //generar un nuevo número aleatorio
    
    //iniciar el numero de intentos
    condicionesIniciales();

    //deshabilitar el boton juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
