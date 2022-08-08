const personajes = [
    { id: 1, nombre: "Luke", edad: 23, arma: "Arma:Lightsaber",mision:"Mision: Fuga de la carcel republicana", img:"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"},
    { id: 3, nombre: "Leia", edad: 23, arma: "Arma:Pistola blaster", mision:"Misión diplomática a Alderaan", img:"https://static.wikia.nocookie.net/esstarwars/images/9/9b/Princessleiaheadwithgun.jpg/revision/latest?cb=20150117214124" },
    { id: 4, nombre: "Han Solo", edad: 21, arma: "Arma:BlasTech DL-44", mision:"Misión a Tatooine (Guerra Civil Galáctica)", img:"https://static.wikia.nocookie.net/esstarwars/images/f/fe/Han_Solo%27s_blaster.jpg/revision/latest?cb=20151030182246" },
    { id: 5, nombre: "Yoda", edad: 900, arma: "Arma:Lightsaber",mision:"Misión:Escaramuza en Mapuzo", img:"https://www.show.news/__export/1588641921429/sites/debate/img/2020/05/04/yoda_crop1588641235430.jpg_423682103.jpg" },
    { id: 6, nombre: "Chewbacca", edad: 200, arma: "Arma:Ballesta",mision:"Misión a Coruscant", img:"https://media.ambito.com/p/3f6496dc469474b0d9bca8286009b056/adjuntos/239/imagenes/039/830/0039830422/chewbaccajpg.jpg" },
    { id: 7, nombre: "Darth Vader", edad: 45, arma: "Arma:Lightsaber",mision:"Misión:Ejecutar la estrella de la muerte", img:"https://www.nacionflix.com/__export/1652817679292/sites/debate/img/2022/05/17/star-wars-darth-vader.jpg_1103262657.jpg" },
]


const catalogoPersonajes = new CatalogoPersonajes(personajes);
console.log("PERSONAJES DISPONIBLES", catalogoPersonajes.personajes)
mostrarMenu()

function mostrarMenu() {
    const menu = ["Crear Personaje","Listar Personajes", "Buscar Personaje", "Actualizar Personaje","Ordenar","Borrar", "Salir"]

    menu.forEach((datos)=>{
        mostrarDatos(datos);
    })

    function mostrarDatos(datos)
    {
        const nodoMenu =document.getElementById("mainMenu");
        const btn =document.createElement("button");
        btn.innerText = (datos)
        btn.classList.add("boton")

        btn.addEventListener("click", ()=>{
            menuOpciones(datos)
        })

        nodoMenu.appendChild(btn);
    }

        function menuOpciones(datos)
        {
        switch (datos) {
            case "Crear Personaje": // Crear Personaje
                crearPersonaje()
                break;
            case "Listar Personajes": // Listado de personajes
                listarPersonajes()
                break;
            case "Buscar Personaje": // Busqueda de personaje
                buscarPersonaje()
                break;
            case "Actualizar Personaje": // Actualizar un personaje
                actualizarPersonaje()
                break;
            case "Ordenar": // Ordenar personajes
                ordenarPersonajes()
                break;
            case "Borrar": //Borrar personaje
                borrarPersonaje()
                break;
            case "Salir":
                alert("El miedo es el camino al lado oscuro")
                break;
            default:
                alert("Opción Inválida")
                break;
        }
    }
}



function crearPersonaje() {
    let nombre = prompt("Ingrese un nombre")
    let edad = Number(prompt("Ingrese una edad"))
    let arma = prompt("Ingrese un arma")
    let mision = prompt("Ingrese su misión")
    let img = prompt("Ingrese una imagen")

    let personaje = new Personajes(catalogoPersonajes.darCantidad() + 1, nombre, edad, arma, mision, img);
    catalogoPersonajes.crearPersonaje(personaje);

    console.log("CATALOGO PERSONAJES", catalogoPersonajes);

    listarPersonajes();
}

function listarPersonajes() {
    
    //catalogoPersonajes.listarPersonajes();

    const nodoPrincipal=document.getElementById("mainContent")
    nodoPrincipal.innerHTML="";
    nodoPrincipal.setAttribute("style", "display:flex")
    catalogoPersonajes.personajes.forEach(personaje => {

        const divPersonaje=document.createElement("div")
        divPersonaje.innerHTML=`<h3>${personaje.nombre}</h3>
                                <div><img src=${personaje.img}></div>
                                <hr>
                                <div>${personaje.edad}</div>
                                <div>${personaje.arma}</div>
                                <div>${personaje.mision}</div>

                                `

        nodoPrincipal.appendChild(divPersonaje);
        
    });
}

function buscarPersonaje() {
    let nombreABuscar = prompt("Ingrese el nombre que quiere buscar");
    catalogoPersonajes.buscarPersonaje(nombreABuscar);

}

function actualizarPersonaje() {

    let nombreABuscar = prompt("Ingrese el nombre que quiere buscar");
    let nombre = prompt("Ingrese un nombre")
    let edad = Number(prompt("Ingrese una edad"))
    let arma = prompt("Ingrese un arma")
    let mision = prompt ("Ingrese una misión")
    let img = prompt ("Ingrese una imagen")

    catalogoPersonajes.actualizarPersonaje(nombreABuscar, nombre, edad, arma, mision, img);
    listarPersonajes();
}

function borrarPersonaje(){

    let nombreABuscar = prompt("Ingrese el nombre que quiere borrar");

    catalogoPersonajes.borrarPersonaje(nombreABuscar)
    listarPersonajes();

}

function ordenarPersonajes()
{
    listarPersonajes()
    catalogoPersonajes.ordenarPersonajes();
}

programarBoton()

function programarBoton(){
    const btnBuscar=document.getElementById("btnSearch");

    btnBuscar.addEventListener("click",()=>{
        const inputPersonaje=document.getElementById("buscar").value;
        filtrarPersonajes(inputPersonaje);
    })
    function filtrarPersonajes (inputPersonaje){
        const filtrados = listarPersonajes.filter((personaje)=>personaje.nombre.includes(inputPersonaje)!==-1);
        listarPersonaje(filtrados)
    }
}