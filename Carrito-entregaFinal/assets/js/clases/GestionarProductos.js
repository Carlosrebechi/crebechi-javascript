class GestionarProductos {


    iniciar(){

        productos = [

            {
                "id": 1,
                "nombre": "Intel i3 12100",
                "descripcion": "12th Generación. Video integrado. Socket S1700",
                "precio": 28000,
                "stock": 50,
                "img": "i3.png",
                "destacado": 1
            },
            {
                "id": 2,
                "nombre": "Notebooks Pro-HOGAR",
                "descripcion": "INTEL i3 - 6 NUCLEOS 256 GB 12 GB",
                "precio": 620000,
                "stock": 50,
                "img": "Laptop.jpg",
                "destacado": 1
            },
            {
                "id": 3,
                "nombre": "Intel Pentium Gold G7400",
                "descripcion": "12th Generación. Socket S1700",
                "precio": 80000,
                "stock": 50,
                "img": "pentiumGold.png",
                "destacado": 1
            },
            {
                "id": 4,
                "nombre": "NOTEBOOKS-PRO Lenono M625",
                "descripcion": "AMD A4 256 GB 8 GB",
                "precio": 325000,
                "stock": 50,
                "img": "LENOVO-THINKCENTRE-M625-1-500X500.webp",
                "destacado": 1
            },
            
            {
                "id": 5,
                "nombre": "Intel Celeron G6900 3.5GHz",
                "descripcion": "12th Generación. Socket S1700",
                "precio": 12000,
                "stock": 50,
                "img": "celeron.png",
                "destacado": 1
            },
            {
                "id": 6,
                "nombre": "Intel i3 12100",
                "descripcion": "12th Generación. Video integrado. Socket S1700",
                "precio": 35000,
                "stock": 50,
                "img": "i3.png",
                "destacado": 0
            },
            {
                "id": 7,
                "nombre": "NOTEBOOKS-PRO BEELINK SERIES 5 PRO",
                "descripcion": "RYZEN 5800 - 8 NUCLEOS 1 TB - 32 GB ",
                "precio": 795000,
                "stock": 50,
                "img": "MiniPC-Beelin-Serie5.webp",
                "destacado": 1
            },
            
          

        ]



        let productosDestacados = productos.filter(prod => prod.destacado == 1);

        
        this.cargarProductos(productosDestacados);

        this.actualizarCarrito();




    }

    /**
     * Metodo que se encarga de hacer visible en la pagina una coleccion de productos 
     * @param {*} productos  la coleccion de produstos
     */
    cargarProductos(productos){


        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "" ;

        if (productos.length == 0){

            this.mostrarHeader("No se han encontrado prodcutos para su busqueda");
        
            

        }else {

            productos.forEach(producto => {
                
                const {id,nombre,precio,img,cantidad,descripcion} = producto ;

                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.id = "row_"+id;

                prod.innerHTML =  `
                                    <div class = "w-20" >
                                    
                                        <img src ="./assets/img/${img}" alt = "" width="150" height = "150"> </img>
                                    
                                    </div>

                                     <div class="p-3 d-flex flex-column w-60 h-150">

                                        <h3>${nombre}</h3>
                                        <p>${descripcion.substring(0,120)}</p>
                                     </div>

                                     <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                     <p class= "precio">$${precio}</p>
                                     <a href="javascript:addCarrito(${id})" class="btn btn-primary" >Agregar al carrito </a>
                                     </div>


                
                                    `;

                divProductos.appendChild(prod)   ;                 




            });



        }



    }



    addCart(item){

        const existe = carrito.some(producto=>producto.id === item.id);

        if (existe){

            const articulo = carrito.map(producto=>{

                if (producto.id === item.id){


                    producto.cantidad++;
                    return producto;

                }else{

                    return producto ;

                }


            })


          
            Toastify({

                text: "Se actualizo la cantidad del producto",
                duration: 2000 ,
                gravity : "bottom"
        


            }).showToast();

        }else{


            carrito.push(item);
            //alert("Producto agregado con exito");

            Toastify({

                text: "Producto agregado con exito",
                duration: 2000 ,
                gravity : "bottom"
        


            }).showToast();



        }


        this.actualizarCarrito();


    }


    actualizarCarrito(){

        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();



    }

    actualizarContador(){


        let totalCarrito = this.contarProductos();

        let countCarrito = document.querySelector("#badgeCarrito");
        countCarrito.innerHTML = totalCarrito;


    }

    contarProductos(){

        let contarProductos = 0 ;

        carrito.forEach((producto) =>{


            contarProductos = contarProductos + parseInt(producto.cantidad);

        });


        return contarProductos;


    }


    guardarCarrito(){


        localStorage.setItem(key_carrito,JSON.stringify(carrito));


    }

    mostrarCarrito(){

        let total = 0 ;

        let detalleCarrito = document.querySelector("#idCarrito");
        detalleCarrito.innerHTML = "" ;

        carrito.forEach((producto) =>{

            const {id,nombre,precio,img,cantidad} = producto ;


            const row = document.createElement("div");
            row.classList.add("row");
            total += parseInt(precio) * cantidad ;

            row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${precio}
                        </div> 
                        
                      <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${cantidad}
                        </div>

                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                        <a href="javascript:eliminar(${id})">
                            <i class="fa-solid fa-square-minus fa-2x"></i>
                        </a>
                        </div>

            
                     `;


                     detalleCarrito.appendChild(row);



        })

    



    }


    eliminarProducto(id){

        Swal.fire({

            title : "Esta seguro de eliminar el producto ?" ,
            showCancelButton: true ,
            cancelButtonColor : '#d33' ,
            confirmButtonText : "Si, eliminarlo",
            cancelButtonText : "Cancelar, error al hacer click!",

        }).then ((result) =>{

            if (result.isConfirmed){

                carrito = carrito.filter (articulo => articulo.id != id ) ;

                this.actualizarCarrito() ;

                toastify({

                    text: "Producto eliminado con exito",
                    duration: 2000 ,
                    gravity : "bottom"
            
    
    
                }).showToast();   



            }





          })




    }


    mostrarHeader(msj){

        const headerProductos = document.querySelector('#headerProductos');
        headerProductos.innerHTML = msj;


    }

    buscar(palabra){

        let resultado =  productos.filter(producto => producto.nombre.toLowerCase().includes(palabra.toLowerCase()) || producto.descripcion.toLowerCase().includes(palabra.toLowerCase()));

        this.cargarProductos(resultado);


    }



}




