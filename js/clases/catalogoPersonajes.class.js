class CatalogoPersonajes {
    constructor(personajes) {
        this.personajes = personajes;
    }

    crearPersonaje(personajes) {
        this.personajes.push(personajes);
    }

    darCantidad() {
        return this.personajes.length;
    }
    
    
    obtenerMayorId(){  
        let resultado = 0;
        this.personajes.forEach((personaje)=>{
            resultado=personaje.id>resultado ? personaje.id : resultado
        })
    return resultado
    }

    listarPersonajes() {
        
        this.personajes.forEach((personajes) => {
            console.log("LISTADO DE PERSONAJES DISPONIBLES", personajes)
        })
    }
    buscarPersonaje(nombreABuscar) {
        let esta = this.personajes.some((personajes) =>
            personajes.nombre.includes(nombreABuscar)
        )

        if (esta) {
            

            let filtrado = this.personajes.filter((personajes) =>
                    personajes.nombre.includes(nombreABuscar)
            )

            return filtrado
        }
        else {
             return false
        }
    }

    buscarId(idABuscar) {
        return this.personajes.find((personajes) =>
            personajes.id==idABuscar
        )
    }

    actualizarPersonaje(idABuscar, nombre, edad, arma, mision, img)
    {
        let personajeEncontrado = this.buscarId(idABuscar)
        
        personajeEncontrado.nombre=nombre;
        personajeEncontrado.edad=edad;
        personajeEncontrado.arma=arma;
        personajeEncontrado.mision=mision
        personajeEncontrado.img=img;
     }


    borrarPersonaje(idABuscar)
    {
        let personajeEncontrado = this.buscarId(idABuscar)

        if(personajeEncontrado)
        {
            let indicePersonaje= this.personajes.indexOf(personajeEncontrado)
            this.personajes.splice(indicePersonaje,1)
        }
    }

    ordenarPersonajes(){
    this.personajes.sort((personajeA,personajeB)=> (personajeA.nombre>personajeB.nombre) ? 1 : -1)
     
    }
}
