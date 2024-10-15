alert ("Bienvenid@s a nuetsra calculadora");
//solicito un numero al usuario
let numero1 = parseInt(prompt("Ingrese un numero")) ;
console.log("el numero ingresado es:" + numero1);
//solicito una operacion
let operador = prompt("Ingrese una operacion: +,-,*,/");
console.log("la operacion ingresada es:" + operador);
//solicito otro numero
let numero2 = parseInt(prompt("Ingrese otro numero")) ;
console.log("el numero ingresado es:" + numero2);
console.log(numero1);
console.log(operador);
console.log(numero2);

if (operador == ""){
    alert("No ingresaste una operacion valida");
}

if (!isNaN(numero1) && !isNaN(numero2)  && operador != ""  ){
    if (operador == "+"){
        let resultadoSuma = numero1 + numero2 ;
        alert("El resultado de la suma es: "+resultadoSuma);
    
    }else if (operador == "-"){
            let resultadoResta = numero1 - numero2 ;
            alert("El resultado de la suma es: "+resultadoResta);
    }else if(operador == "*"){
        let resutadoMulti = numero1 * numero2 ;
        alert("El resultado de la multiplicacion es "+ resutadoMulti);
    
  
    }else if (operador == "/"){
        if (numero2 == 0){
            alert("No se puede dividir por cero");
        }else{
            let resultadoDiv= numero1 / numero2 ;
            alert("El resultado de la division es "+ resultadoDiv);
        }
    }else{
        alert("No ingresaste una operacion valida");
    }
    
}else{   
    alert("No fue posible hacer el calculo");
}




