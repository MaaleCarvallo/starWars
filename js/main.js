let personajes


if(localStorage.getItem("personajes"))
{
     personajes=JSON.parse(localStorage.getItem("personajes"))
}
else {
    personajes = [
        { id: 1, nombre: "Luke", edad: 23, arma: "Lightsaber",mision:"Fuga de la carcel republicana", img:"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"},
        { id: 3, nombre: "Leia", edad: 23, arma: "Pistola blaster", mision:"Misión diplomática a Alderaan", img:"https://static.wikia.nocookie.net/esstarwars/images/9/9b/Princessleiaheadwithgun.jpg/revision/latest?cb=20150117214124" },
        { id: 4, nombre: "Han Solo", edad: 21, arma: "BlasTech DL-44", mision:"Misión a Tatooine (Guerra Civil Galáctica)", img:"https://static.wikia.nocookie.net/esstarwars/images/f/fe/Han_Solo%27s_blaster.jpg/revision/latest?cb=20151030182246" },
        { id: 5, nombre: "Yoda", edad: 900, arma: "Lightsaber",mision:"Escaramuza en Mapuzo", img:"https://www.show.news/__export/1588641921429/sites/debate/img/2020/05/04/yoda_crop1588641235430.jpg_423682103.jpg" },
        { id: 6, nombre: "Chewbacca", edad: 200, arma: "Ballesta",mision:"Misión a Coruscant", img:"https://media.ambito.com/p/3f6496dc469474b0d9bca8286009b056/adjuntos/239/imagenes/039/830/0039830422/chewbaccajpg.jpg" },
        { id: 7, nombre: "Darth Vader", edad: 45, arma: "Lightsaber",mision:"Ejecutar la estrella de la muerte", img:"https://www.nacionflix.com/__export/1652817679292/sites/debate/img/2022/05/17/star-wars-darth-vader.jpg_1103262657.jpg" },
    ]
}
    
    const catalogoPersonajes = new CatalogoPersonajes(personajes);
    mostrarMenu() 

function mostrarMenu() {
    const menu = ["Crear Personaje","Listar Personajes","Ordenar", ,"Guardar Personajes"]

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
                listarPersonajes(catalogoPersonajes.personajes)
                break;
            case "Ordenar": // Ordenar personajes
                ordenarPersonajes()
                break;
            case "Guardar Personajes":
                guardarPersonajes()
                break;
            default:
                alert("Opción Inválida")
                break;
        }
    }
}



function crearPersonaje() {
    const nodoPrincipal=document.getElementById("mainContent")
    let personajeAcrear=document.createElement("form")
    personajeAcrear.innerHTML=` <input id="nombrePersonaje" type="text" placeholder="Nombre personaje">
        <input id="edadPersonaje" type="text" placeholder="Edad">
        <select id="arma"> 
        <option>Seleccionar arma</option>
        <option value="Lightsaber">Lightsaber</option>
        <option value="Pistola blaster">Pistola blaster</option>
        <option value="BlasTech DL-44">Arma:BlasTech DL-44</option>
        <option value="Ballesta">Ballesta</option>
        </select>
        <select id="misiones">
        <option>Seleccione una misión</option>
        <option value="Fuga de la carcel republicana">Fuga de la carcel republicana</option>
        <option value="Misión diplomática a Alderaan">Misión diplomática a Alderaan</option>
        <option value="Misión a Tatooine">Misión a Tatooine</option>
        <option value="Escaramuza en Mapuzo">Misión:Escaramuza en Mapuzo</option>
        <option value="Misión a Coruscant">Misión a Coruscant</option>
        <option value="Ejecutar la estrella de la muerte">Misión:Ejecutar la estrella de la muerte</option>
        </select>
        
        <input id="imagen" type="text" placeholder="Imagen">
        <button id="crearPersonaje" type="submit">Crear</button>
                                      `
    nodoPrincipal.innerHTML=""
    nodoPrincipal.appendChild(personajeAcrear)
    
    let botonCrear=document.getElementById("crearPersonaje")
    botonCrear.addEventListener("click",()=>{
        let nombrePersonaje = document.getElementById("nombrePersonaje")
        let edadPersonaje = document.getElementById("edadPersonaje")
        let arma = document.getElementById("arma")
        let misiones = document.getElementById("misiones")
        let imagen = document.getElementById("imagen")
        
        let personaje = new Personajes(catalogoPersonajes.darCantidad() + 1, nombrePersonaje.value, edadPersonaje.value, arma.value, misiones.value, imagen.value);
        catalogoPersonajes.crearPersonaje(personaje)
    
        listarPersonajes(catalogoPersonajes.personajes);
    })

}

function listarPersonajes(persojanesMostrar) {
    

    const nodoPrincipal=document.getElementById("mainContent")
    nodoPrincipal.innerHTML="";
    nodoPrincipal.setAttribute("style", "display:flex")
    persojanesMostrar.forEach(personaje => {

        const divPersonaje=document.createElement("div")
        divPersonaje.innerHTML=`<h3>${personaje.nombre}</h3>
                                <div><img src=${personaje.img}></div>
                                <hr>
                                <div>${personaje.edad}</div>
                                <div>${personaje.arma}</div>
                                <div>${personaje.mision}</div>
                                <div><button>Seleccionar</button></div>
                                <div><button id="actualizar-${personaje.id}" value="${personaje.id}">Actualizar</button></div>
                                <div><button id="borrar-${personaje.id}" value="${personaje.id}">Borrar</button></div>

                                `

        nodoPrincipal.appendChild(divPersonaje);
        
        let botonActualizar=document.getElementById(`actualizar-${personaje.id}`)
        botonActualizar.addEventListener("click", ()=> {
            actualizarPersonaje(botonActualizar.getAttribute("value"))
        })
    
    
        let botonBorrar=document.getElementById(`borrar-${personaje.id}`)
        botonBorrar.addEventListener("click", ()=> {
            borrarPersonaje(botonBorrar.getAttribute("value"))
        })
    });
}

function buscarPersonaje() {
    let nombreABuscar = prompt("Ingrese el nombre que quiere buscar");
    catalogoPersonajes.buscarPersonaje(nombreABuscar);

}



function actualizarPersonaje(idAActualizar) {
    let personajeAActualizar= catalogoPersonajes.buscarId(idAActualizar)
    const nodoPrincipal=document.getElementById("mainContent")
    let formularioAActualizar=document.createElement("form")
    formularioAActualizar.innerHTML=` <input value="${personajeAActualizar.nombre}" id="nombrePersonaje" type="text" placeholder="Nombre personaje">
        <input value="${personajeAActualizar.edad}" id="edadPersonaje" type="text" placeholder="Edad">
        <select id="arma"> 
        <option>Seleccionar arma</option>
        <option value="Lightsaber" ${(personajeAActualizar.arma=="Lightsaber") ? "selected" : ""}>Lightsaber</option>
        <option value="Pistola blaster" ${(personajeAActualizar.arma=="Pistola blaster") ? "selected" : ""}>Pistola blaster</option>
        <option value="BlasTech DL-44" ${(personajeAActualizar.arma=="BlasTech DL-44") ? "selected" : ""}> BlasTech DL-44</option>
        <option value="Ballesta" ${(personajeAActualizar.arma=="Ballesta") ? "selected" : ""}>Ballesta</option>
        </select>
        <select id="misiones">
        <option>Seleccione una misión</option>
        <option value="Fuga de la carcel republicana" ${(personajeAActualizar.mision=="Fuga de la carcel republicana") ? "selected" : ""}>Fuga de la carcel republicana</option>
        <option value="Misión diplomática a Alderaan" ${(personajeAActualizar.mision=="Misión diplomática Alderaan") ? "selected" : ""}>Misión diplomática a Alderaan</option>
        <option value="Misión a Tatooine" ${(personajeAActualizar.mision=="Misión a Tatooine") ? "selected" : ""}>Misión a Tatooine</option>
        <option value="Escaramuza en Mapuzo"${(personajeAActualizar.mision=="Escaramuza en Mapuzo") ? "selected" : ""}>Misión:Escaramuza en Mapuzo</option>
        <option value="Misión a Coruscant"${(personajeAActualizar.mision=="Misión a Coruscant") ? "selected" : ""}>Misión a Coruscant</option>
        <option value="Ejecutar la estrella de la muerte" ${(personajeAActualizar.mision=="Ejecutar la estrella de la muerte") ? "selected" : ""}>Misión:Ejecutar la estrella de la muerte</option>
        </select>
        
        <input value="${personajeAActualizar.img}" id="imagen" type="text" placeholder="Imagen">
        <button id="crearPersonaje" type="submit">Actualizar</button>
                                      `
    nodoPrincipal.innerHTML=""
    nodoPrincipal.appendChild(formularioAActualizar)
    
    let botonActualizar=document.getElementById("crearPersonaje")
    botonActualizar.addEventListener("click",()=>{
        let nombrePersonaje = document.getElementById("nombrePersonaje")
        let edadPersonaje = document.getElementById("edadPersonaje")
        let arma = document.getElementById("arma")
        let misiones = document.getElementById("misiones")
        let imagen = document.getElementById("imagen")
        

        catalogoPersonajes.actualizarPersonaje(idAActualizar, nombrePersonaje.value, edadPersonaje.value, arma.value, misiones.value, imagen.value)
    
        listarPersonajes(catalogoPersonajes.personajes);
    })

}

function borrarPersonaje(idABorrar){

    catalogoPersonajes.borrarPersonaje(idABorrar)
    listarPersonajes(catalogoPersonajes.personajes);

}

function ordenarPersonajes()
{
    catalogoPersonajes.ordenarPersonajes();
    listarPersonajes(catalogoPersonajes.personajes)
    
}


const btnBuscar=document.getElementById("btnSearch");
btnBuscar.addEventListener("click",()=>{
    const inputPersonaje=document.getElementById("buscar").value;
    const personajesEncontrados=catalogoPersonajes.buscarPersonaje(inputPersonaje);
    if (personajesEncontrados) {
        listarPersonajes(personajesEncontrados)
     }
     else {
         let noEncontrado= document.createElement("p")
         noEncontrado.innerText="Personaje no encontrado"
         const nodoPrincipal=document.getElementById("mainContent")
         nodoPrincipal.innerHTML=""
         nodoPrincipal.appendChild(noEncontrado)
     }
})

function guardarPersonajes(){
    localStorage.setItem("personajes", JSON.stringify(catalogoPersonajes.personajes))
}

