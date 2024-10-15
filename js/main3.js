const usuario = "user";
const contraseña = "pass1234";

let  cod_pc_gamer     = 1
let precio_pc_gamer = 1500000.00 ;

let  cod_pc_escritorio     = 2 ;
let  precio_pc_escritorio  = 1350000.00 ;

let  cod_pc_oficina    = 3 ;
let  precio_pc_oficina  = 700000.00 ;

let  cod_notebook     = 4 ;
let  precio_notebook  = 1250000.00 ;

alert ("Bienvenid@ a nuestra TIENDA TECNO REDES. \n Debe loguearse para poder comprar");

let user = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

if (user != "" && pass != "" ){


    if ((user === usuario ) && (pass === contraseña)){

        alert("Hola "+usuario+"\nSolo podes comprar dos productos");

        let sumaCarrito = 0 ;
        let lista_productos = "" ;

        let cod_prod = parseInt(prompt("Ingrese el codigo de un producto"));

        console.log(cod_prod);

        if (!isNaN(cod_prod)){

            if(cod_prod === cod_pc_gamer){

                lista_productos += "Pc Gamer $" + precio_pc_gamer + "\n";
                sumaCarrito += precio_pc_gamer ;
            }else if (cod_prod === cod_pc_escritorio){

                lista_productos += "Pc Escritorio $" + precio_pc_escritorio + "\n";
                sumaCarrito += precio_pc_escritorio ;

            }else if (cod_prod === cod_pc_oficina){

                lista_productos += "Pc oficina $" + precio_pc_oficina + "\n";
                sumaCarrito += precio_pc_oficina ;

            }else if (cod_prod === cod_notebook){

                lista_productos += "Notebook $" + precio_notebook + "\n";
                sumaCarrito += precio_notebook ;
            }else {

                console.log("codigo invalido");
            }

            



        }else {

            alert("Debes ingresar un numero");

        }

        cod_prod = parseInt(prompt("Ingrese el codigo de un segundo producto"));

        console.log(cod_prod);

        if (!isNaN(cod_prod)){

            if(cod_prod === cod_pc_gamer){

                lista_productos += "Pc gamer $" + precio_pc_gamer + "\n";
                sumaCarrito += precio_pc_gamer ;
            }else if (cod_prod === cod_pc_escritorio){

                lista_productos += "Pc escritorio $" + precio_pc_escritorio + "\n";
                sumaCarrito += precio_pc_escritorio ;

            }else if (cod_prod === cod_pc_oficina){

                lista_productos += "Pc oficina $" + precio_pc_oficina + "\n";
                sumaCarrito += precio_pc_oficina ;

            }else if (cod_prod === cod_notebook){

                lista_productos += "Notebook $" + precio_notebook + "\n";
                sumaCarrito += precio_notebook ;
            }else {

                console.log("codigo invalido");
            }


            if (sumaCarrito > 0) {

                alert("Usted compro:\n"+lista_productos+"\n"+"La suma total de la compra es: $"+sumaCarrito);

            }else {

                alert("No fue posible realizar la compra");
            }
            



        }else {

            alert("Debes ingresar un numero");

        }



    }else{

        alert("Usuario y/o contraseña incorrectas.Recarga la pagina!!");

    }




}else{


    alert("Tenes que ingresar todos los datos. Recarga la pagina!!");

}
