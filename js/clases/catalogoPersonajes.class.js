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
            alert("LO ENCONTRE")

            let filtrado = this.personajes.filter((personajes) =>
                    personajes.nombre.includes(nombreABuscar)
            )

            console.table("ESTO ENCONTRÉ", filtrado);
        }
        else {
            alert("NO LO ENCONTRÉ")
        }


    }
    actualizarPersonaje(nombreABuscar, nombre, edad, arma, mision, img)
    {
        let personajeEncontrado = this.personajes.find((personajes) =>
            personajes.nombre.includes(nombreABuscar)
        )
        if(personajeEncontrado)
        {
            personajeEncontrado.nombre=nombre;
            personajeEncontrado.edad=edad;
            personajeEncontrado.arma=arma;
            personajeEncontrado.mision=mision
            personajeEncontrado.img=img;
            console.log("Personaje actualizado", this.personajes);
        }
        else{
            alert("NO PUEDO MODIFICAR")
        }    
    }

    borrarPersonaje(nombreABuscar)
    {
        let personajeEncontrado = this.personajes.find((personajes) =>
        personajes.nombre.includes(nombreABuscar))

        if(personajeEncontrado)
        {
            let indicePersonaje= this.personajes.indexOf(personajeEncontrado)
            this.personajes.splice(indicePersonaje,1)
        }
    }

    ordenarPersonajes()
    {
        this.personajes.sort((personajeA, personajeB)=>
        {
            if(personajeA.nombre<personajeB.nombre)
            {
                return -1
            }
            return 1;
        
        })
        console.log("ORDENADO", this.personajes)
    }

}