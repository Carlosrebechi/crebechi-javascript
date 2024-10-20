let total = 0 ;

let cant = parseInt(prompt ("Cuantos numeros quiere sumar ?"));
if (!isNaN(cant)){

    for (let i = 0 ; i < cant ; i++) {

        let dato = parseInt(prompt("Ingrese un numero"));
        if (!isNaN(dato)){

            total = total + dato ;
            console.log(total);

        }else {

            alert("No ingresaste un numero. Operacion cancelada ");
            break;
        }
    }
            if (total > 0){
            alert ("La suma total es: "+total)
        }
}else{

   
    
}
