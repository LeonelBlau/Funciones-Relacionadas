
let valorDolar = 208
let valorPeso = 0.0096
let cambio; 
 
let cantidad;

function solicitarDatos() {

    cambio = (prompt("Ingrese la transaccion que desea realizar...(Dolares a pesos o Pesos a dolares)"))
    
    cantidad = Number(prompt("Ingrese el monto a convertir"))
    
    
    verificar(cambio, cantidad); 
    
    }
    
    // No me toma el calculo "Dolares a pesos" ni sale el alert correspondiente
    
    function verificar(cambio, cantidad) {
     if (cambio == "Pesos a dolares") {
      resultado1 = (cantidad * valorPeso) 
     }  else if (cambio == "Dolares a pesos"); { 
        resultado2 = (cantidad * valorDolar)
    } 
    resultadoFinal(resultado1, resultado2) 
}
    
    
    
     function resultadoFinal(resultado1, resultado2) { 
         if (cambio == "Pesos a dolares") {
            alert('Usted va a adquirir ' + resultado1 + ' USD en ventanilla')
         } else if (cambio == "Dolares a pesos") {
            alert('Usted va a adquirir ' + resultado2 + ' Pesos argentinos en ventanilla')
         }  
        } 

    
    
    solicitarDatos()
