//Declaración de variables
var nombreUsuario = "Lucas roman ";
var saldoCuenta = 3000;
var limiteExtraccion= 2000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero()
{
    debugger;
    var MontoDeExtraccion = prompt("extraer dinero");
    if (saldoCuenta>=MontoDeExtraccion) {
      saldoCuenta-=MontoDeExtraccion;
      actualizarSaldoEnPantalla()
    }else{
        alert("La extraccion es mayor al sueldo actual");
    }
}

function depositarDinero() {
    debugger;
    depositarDinero = prompt("depositar dinero:");
    
    if (saldoCuenta>=depositarDinero) {
    saldoCuenta +=depositarDinero;
    actualizarSaldoEnPantalla()
    }else
    {
        alert( "el deposito es menor que el salgo actual");
    }
}


function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {
    var iniciarSesion = prompt("Cual es tu nombre de usuario");

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}







// //tp 












// //Declaración de variables
// var nombreUsuario = 'Guido Pugliese';
// var saldoCuenta = 6000;
// var limiteExtraccion = 1000;
// //Ejecución de las funciones que actualizan los valores de las variables en el HTML.
// window.onload = function() {
//     iniciarSesion()
//     cargarNombreEnPantalla();
//     actualizarSaldoEnPantalla();
//     actualizarLimiteEnPantalla();
// }


// //Funciones que tenes que completar
// function cambiarLimiteDeExtraccion() {
//     var nuevolimextraccion = prompt('Cual es el nuevo limite de extraccion?');
//     if((nuevolimextraccion == limiteExtraccion) || (nuevolimextraccion == '')){
//         alert('Operacion denegada, intente nuevamente')
//         return
// }
//     if(nuevolimextraccion > saldoCuenta){
//     alert('Limite excedido, no posee esa suma en su cuenta')
//         return
// }
// if(nuevolimextraccion == null){
//     alert('Opreacion cancelada')
//     return
// }
// if(isNaN(nuevolimextraccion)){
//     alert('Por favor, utilice solo numeros')
// }
// else{
// limiteExtraccion = parseInt(nuevolimextraccion);
//     if(saldoCuenta >= nuevolimextraccion){
//         alert('Nuevo limite aceptado, su nuevo limite es de ' + nuevolimextraccion)
//     }
//     actualizarLimiteEnPantalla();
// }
// }

// function extraerDinero() {
//     var saldoanterior = saldoCuenta;
//     var extraccion = prompt('Cuanto desea extraer?');
//     if(extraccion == ''){
//         alert('Error, operacion denegada, intente nuevamente')
//         return
// }
//     if(extraccion == null){
//         alert('Opreacion cancelada')
//         return
// }
// if (extraccion == 0){
//     alert('Error, hack en la Matrix')
//     return
// }
// if(extraccion > limiteExtraccion){
//         alert('La operacion supera el limite de extraccion permitido')
//         return
// }
//     if(extraccion > saldoCuenta){
//         alert('No hay suficiente dinero en la cuenta')
//         return
// }
//     if(isNaN(extraccion)){
//         alert('Por favor, utilice solo numeros')
// }
//     else{
//         if(extraccion % 100 !== 0){
//             alert('Error, esta terminal solo devuelve billetes de 100 $')
//             return
// }
//     extraccion = Number(extraccion);
//     if(extraccion > 0){
//     saldoCuenta -= extraccion;
//     actualizarSaldoEnPantalla();
//     alert('Has retirado: $' + extraccion + '\n' +'Saldo anterior: $' + saldoanterior + '\n' + 'Saldo actual: $' + saldoCuenta)
// }
// }
// }

// function depositarDinero() {
//     var saldoanterior = saldoCuenta;
//     var sumardinero = prompt('Cuanto dinero desea depositar?')
//     if(sumardinero == ''){
//         alert('Error no se detecto ningun deposito')
//         return
// }
//     if(sumardinero == null){
//         alert('Opreacion cancelada')
//         return
// }
//     if(isNaN(sumardinero)){
//         alert('Por favor, utilice solo numeros')
// }
//     else{
//         if(sumardinero % 0){
//             alert('Alerta, operacion cancelada')
//             return
// }
//     var sumardinero = Number(sumardinero);
//     if(sumardinero > 0)
//     saldoCuenta += sumardinero;
//     actualizarSaldoEnPantalla();
//     alert('Has depositado: $' + sumardinero + '\n' + 'Saldo anterior: $' + saldoanterior + '\n' + 'Saldo actual: $'+ saldoCuenta);
// }
// }
// function pagarServicio() {
// var saldoanterior = saldoCuenta;
// var Agua = 350;
// var Telefono = 425;
// var Luz = 210;
// var Internet = 570;
// var abonarservicio = prompt('Ingrese el servicio que quiera abonar: \n 1- Agua \n 2- Telefono \n 3- Luz \n 4- Internet')

// if(abonarservicio == ''){
//     alert('Error, intente nuevamente')
//     return
// }
// if(abonarservicio == null){
//     alert('Opreacion cancelada')
//     return
// }
// if(abonarservicio > saldoCuenta){
//     alert('No hay suficiente saldo en su cuenta')
//     return
// }
// if(isNaN(abonarservicio)){
//     alert('Por favor, utilice solo numeros')
// }
// else{
// var abonarservicio = Number(abonarservicio)
// switch(abonarservicio){
//     case 1: Agua; alert('Ustede abono su servicio de agua \n' + 'Saldo anterior: $' + saldoanterior + '\n' + 'Dinero descontado: $'+ Agua + '\n' + 'Saldo actual: $'+ saldoCuenta);   saldoCuenta -= Agua
//     break
//     case 2: Telefono; alert('Ustede abono su servicio de telefono \n'  + 'Saldo anterior: $' + saldoanterior + '\n' + 'Dinero descontado: $'+ Telefono + '\n' + 'Saldo actual: $'+ saldoCuenta);   saldoCuenta -= Telefono
//     break
//     case 3: Luz; alert('Ustede abono su servicio de luz \n'  + 'Saldo anterior: $' + saldoanterior + '\n' + 'Dinero descontado: $'+ Luz + '\n' + 'Saldo actual: $'+ saldoCuenta);   saldoCuenta -= Luz
//     break
//     case 4: Internet; alert('Ustede abono su servicio de internet \n'  + 'Saldo anterior: $' + saldoanterior + '\n' + 'Dinero descontado: $'+ Internet + '\n' + 'Saldo actual: $'+ saldoCuenta);   saldoCuenta -= Internet
//     break
//     default: alert('Servicio no detectado, intente nuevamente')
// }
//   actualizarSaldoEnPantalla()
// }
// }

// function transferirDinero() {
//     var cuentaamiga1 = '1234567';
//     var cuentaamiga2 = '7654321';
//     var monto = prompt('Cuanto dinero desea transferir?');
//     if(monto > saldoCuenta){
//         alert('Saldo insuficiente, por favor, intente nuevamente');
//         return
//     }
//     if(monto == ''){
//         alert('Error no se detecto ninguna operacion')
//         return
//     }
//     if(monto == null){
//         alert('Opreacion cancelada')
//         return
//     }
//     if(isNaN(monto)){
//         alert('Por favor ingrese solo numeros')
//         return
//     }
//     if(monto <= saldoCuenta){
//     var destinatario = prompt('A que cuenta desea transferir el dinero?');
//     }
//     if(isNaN(destinatario)){
//         alert('Por favor ingrese solo numeros')
//         return
//     }
//     if(destinatario == ''){
//         alert('Error no se detecto ninguna operacion')
//         return
//     }
//     if(destinatario == null){
//         alert('Opreacion cancelada')
//         return
//     }

//     if((destinatario !== cuentaamiga1) && (destinatario !== cuentaamiga2)){
//         alert('Solo puede transferirse a una cuenta amiga');
//         return
//     }
//     else{
//     var monto = Number(monto)
//     var destinatario = Number(destinatario)
//     if((destinatario == cuentaamiga1) || (destinatario == cuentaamiga2)){
//         alert('Se han transferido: $' + monto +'\n' + 'Cuenta destinataria: ' + destinatario);
//     }
//     saldoCuenta -= monto
//     actualizarSaldoEnPantalla()
//     }
//     }

// function iniciarSesion() {
//     var nombreUsuario = prompt('Cual es su nombre de usuario?')
// if(nombreUsuario == 'Guido Pugliese'){
//     alert('Bienvenido Guidito')
//     cargarNombreEnPantalla();
// }else{
// alert("Acceso incorrecto, retendremos tu dinero por cuestiones de seguridad");
// saldoCuenta = 0;
// actualizarSaldoEnPantalla();
// }
// }

// //Funciones que actualizan el valor de las variables en el HTML
// function cargarNombreEnPantalla() {
//     document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
// }

// function actualizarSaldoEnPantalla() {
//     document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
// }

// function actualizarLimiteEnPantalla() {
//     document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;