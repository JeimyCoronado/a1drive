(() => {
    const btnHome = document.querySelector("[data-btn-home]");
    const btnNosotros = document.querySelector("[data-btn-nosotros]");
    const divHome = document.querySelector("[data-home]");
    const divNosotros = document.querySelector("[data-nosotros]");
    const btnProductos = document.querySelector("[data-btn-productos]");
    const divProductos = document.querySelector("[data-productos]");
    const btnContacto = document.querySelector("[data-btn-contacto]");
    const divContacto = document.querySelector("[data-contacto]");

    const divs = [divHome, divNosotros, divProductos, divContacto];
    const btns = [btnHome, btnNosotros, btnProductos, btnContacto];

    const mostrarSeccion = (event) => {
        const boton = event.target;

        for(let i=0; i<btns.length; i++) {
            if(btns[i] == event.target) {
                btns[i].classList.add("head-enlace-btn-seleccionado");
                divs[i].classList.remove("ocultar");
            }
            else{
                btns[i].classList.remove("head-enlace-btn-seleccionado");
                divs[i].classList.add("ocultar");
            }
        }
    }

    btns.forEach((element) => element.addEventListener("click", mostrarSeccion));

    const imagenes = ["cielo","volt","sporade","gatorade","pepsi","pulp","fanta","ajinomen","monster"];
    const ubicacion = "./img/productos/";
    const mostrarProductos = () => {
        const productos = document.querySelector(".productos");
        imagenes.forEach((imagen) => {
            const imgTag = `<img class="producto" src="${ubicacion+imagen}.png">`;
            productos.innerHTML += imgTag;
        });
    }
    //mostrarProductos();

})();