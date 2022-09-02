let respuestaCorrecta ;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let intervaloTiempo;
let tiempo = 15;
let cantidadDePreguntasPasadas=0;

const trivia = [
    {
        "pregunta": "¿Cuantas entregas tiene la saga principal de películas?",
        "img": "./images/pregunta1.jpg",
        "respuestas": ["9","3","6","12"],
    },

    {
        "pregunta": "¿Cómo se llamaba el maestro de Obi-Wan Kenobi?",
        "img": "./images/pregunta2.jpg",
        "respuestas": ["Quin - Gon Jinn", "Dooku", "Yoda", "Anakin Skywalker"],
    },

    {
        "pregunta": "¿Qué frase se repite en todas las películas de Star Wars?",
        "img": "./images/pregunta1.jpg",
        "respuestas": ["Tengo un mal presentimiento","Yo soy tu padre", "La guerra no lo hace a uno más grandioso", "Que la fuerza te acompañe"],
    },

    {
        "pregunta": "¿Cual es la medida que se utiliza para la fuerza?",
        "img": "./images/pregunta4.jpg",
        "respuestas": ["Mediclorianos", "Células", "Poderes", "Naboo"],
    },

    {
        "pregunta": "¿Cual de estos personajes cuenta con su propia película?",
        "img": "./images/pregunta5.jpg",
        "respuestas": ["Han Solo", "Chewbacca", "Boba Fett", "Yoda"],
    },

    {
        "pregunta": "¿Cuál es la raza de Chewbacca?",
        "img": "./images/pregunta6.jpg",
        "respuestas": ["Wookie", "Grogu", "Kashyyyk","Waroo"],
    },

    {
        "pregunta": "¿Qué perdió Luke Skywalker cuando peleó con Darth Vader?",
        "img": "./images/pregunta8.jpg",
        "respuestas": ["Su mano derecha","Su mano izquierda","Su pie izquierdo", "Su pierna izquierda"],
    },

    {
        "pregunta": "¿Cuantas estrellas de la muerte existieron?",
        "img": "./images/pregunta7.jpg",
        "respuestas": ["2","1","3","5"],
    },

    {
        "pregunta": "¿Cómo se llama el padre de Boba Fett?",
        "img": "./images/pregunta9.jpg",
        "respuestas": ["Jango Fet", "Han Solo", "Gilramos Libkath", "Django Fett"],
    },

    {
        "pregunta": "¿Cómo se llama el actor que interpretó a Anakin Skywalker en los capítulos II y III?",
        "img": "./images/pregunta10.jpg",
        "respuestas": ["Hayden Christensen", "Zac Efron", "James Earl Jones", "Seth Green"],
    },

    {
        "pregunta": "¿Qué le pasó a Anakin Skywalker en su batalla con el conde Dooku?",
        "img": "./images/pregunta11.jpg",
        "respuestas": ["Perdió su brazo derecho", "Perdió su pierna izquiera", "Perdió su pierna derecha", "Él perdió"],
    },

    {
        "pregunta": "¿Quien hizo el papel del comandante Cody?",
        "img": "./images/pregunta12.jpg",
        "respuestas": ["Temuera Morrison", "Jay Laga'aia","Ahmed Best","Joel Edgerton"],
    },
    {
        "pregunta": "Según el emperador ¿cuál era la debilidad de Luke Skywalker?",
        "img": "./images/pregunta13.jpg",
        "respuestas": ["Su fé en sus amigos", "Su fé en el lado luminoso de la fuerza", "Su falta de visión", "Su resistencia al lado oscuro de la fuerza"],
    },
    {
        "pregunta": "¿Donde comenzó la guerra de los clones?",
        "img": "./images/pregunta14.jpg",
        "respuestas": ["Geonosis", "Tatooine","Naboo","Coruscant"],
    },
    {
        "pregunta": "¿Qué película de Star Wars tiene esta cita: He estado en esta pelea desde que tenía siete años?",
        "img": "./images/pregunta15.jpg",
        "respuestas": ["Rogue One: Una historia de Star Wars", "Star Wars:Una nueva esperanza", "Star Wars: The rise of Skywalker", "Solo: Una historia de Star Wars"],
    },
    {
        "pregunta": "¿Qué acabó debiendo Jar Jar Binks a Qui-Gon Jinn tras ser rescatado por el mismo durante la invasión de Naboo?",
        "img": "./images/pregunta16.jpg",
        "respuestas": ["Una deuda de honor","Un viaje a Otoh Gunga", "Un bongo", "Créditos 9000"],
    },
    {
        "pregunta": "¿Qué le dijo Owen Lars a Luke Skywalker sobre su padre?",
        "img": "./images/pregunta17.jpg",
        "respuestas": ["Era un navegante en un carguero de especias","Había sido un caballero Jedi", "Había sido un Lord Sith", "Era un piloto de combate"],
    },
    {
        "pregunta": "¿Quién dijo: Elijo vivir por mi gente?",
        "img": "./images/pregunta18.jpg",
        "respuestas": ["Riyo Chuchi", "Padme Amidala", "Reina Jamillia", "Leia Organa"],
    },
    {
        "pregunta": "¿Cuál era el arma preferia de Chewbacca?",
        "img": "./images/pregunta19.jpg",
        "respuestas": ["Ballesta","Rifle Blaster","Sable de luz", "Club de metal"],
    },
    {
        "pregunta": "¿Cuales son las criaturas que viven en Endor que ayudaron a los rebeldes a derrotar a la segunda estrella de la muerte?",
        "img": "./images/pregunta20.jpg",
        "respuestas": ["Ewoks", "Wookies", "Pastores de Nerf","Jawas"],
    },
    {
        "pregunta": "¿De qué color es el brazo de C-3PO en Star Wars: The force awakens?",
        "img": "./images/pregunta21.jpg",
        "respuestas": ["Rojo", "Negro", "Azul", "Dorado"],
    },
    {
        "pregunta": "¿Cual fue el títuo original de la película de Star Wars?",
        "img": "./images/pregunta22.jpg",
        "respuestas": ["Las aventuras de Luke Starkiller", "Batalla de las estrellas", "Las aventuras de los Jedi", "Batallas en el espacio"],
    },
    {
        "pregunta": "¿Qué apodo llama Han Solo a Luke Skywalker que lo vuelve loco?",
        "img": "./images/pregunta23.jpg",
        "respuestas": ["Niño", "Buckaroo", "Skydancer", "Lukie"],
    },
    {
        "pregunta": "¿Quién da el golpe final que destruye a la segunda estrella de la muerte?",
        "img": "./images/pregunta24.jpg",
        "respuestas": ["Lando Calrissian con el Halcon Milenario", "Jar Jar Binks con un ala en Y", "Han Solo con un X-Wing", "Luke Skywalker con un Speeder"],
    },
    {
        "pregunta": "¿Quién hizo estallar la primera estrella de la muerte y con qué arma?",
        "img": "./images/pregunta25.jpg",
        "respuestas": ["Luke Skywalker con un X-Wing", "Princesa Leia con un X-Wing", "Luke Skywalker con un sable de luz", "Princesa Leia con un detonador térmico"],
    },
    {
        "pregunta": "¿Quién adoptó a la hija de Padme Amidala?",
        "img": "./images/pregunta26.jpg",
        "respuestas": ["Bail Organa", "Capitan Antilles", "Owen y Beru Lars", "Gideon Danu"],
    },
    {
        "pregunta": "¿Cual fue el trabajo que Finn le dijo a Han Solo qué tenía que hacer en la base Starkiller?",
        "img": "./images/pregunta27.jpg",
        "respuestas": ["Saneamiento", "Piloto", "Guardia", "Cocinero"],
    },
    {
        "pregunta": "¿Cuales fueron las últimas palabras de Padmé?",
        "img": "./images/pregunta28.jpg",
        "respuestas": ["Obi-Wan...hay algo bueno en él. Se que lo hay", "Tenías razón Obi-Wan", "Por favor, te daré lo que sea.","Estamos perdiendo poder. Parece haber un problema en el reactor principal"],
    },
    {
        "pregunta": "¿Donde se filmaron las secuencias de Hoth?",
        "img": "./images/pregunta29.jpg",
        "respuestas": ["Noruega", "Islandia", "Dinamarca", "Tierra Verde"],
    },
    {
        "pregunta": "¿Qué edad tenía Anakin Skywalker en la batalla de Geonosis?",
        "img": "./images/pregunta30.jpg",
        "respuestas": ["20","21","22","19"],
    },
    {
        "pregunta": "¿En qué fecha se celebra el día de Star Wars?",
        "img": "./images/pregunta31.jpg",
        "respuestas": ["4 de mayo","15 de septiembre","8 de agosto", "25 de marzo"],
    },
    {
        "pregunta": "¿Cómo se llama el planeta de origen del maestro Yoda?",
        "img": "./images/pregunta32.jpg",
        "respuestas": ["Dagobah","Naboo","Hoth","Tatooine"],
    },
    {
        "pregunta": "Uno de estos robots no pertenece a la saga de Star Wars",
        "img": "./images/pregunta33.jpg",
        "respuestas": ["T-800", "D-0", "C-3PO", "BB-8"],
    },
    {
        "pregunta": "¿En qué año se estrenó la primera película de la saga?",
        "img": "./images/pregunta34.jpg",
        "respuestas": ["1977","1965","1968","1979"],
    },
    {
        "pregunta": "¿De qué pelicula es la frase:Yo soy tu padre?",
        "img": "./images/pregunta35.jpg",
        "respuestas": ["Star Wars Episode V: The empire strikes back", "Star Wars Episode I: The phantom menace", "Star Wars: The clone wars", "Star Wars Episode VI: The return of the Jedi"],
    },
    {
        "pregunta": "¿A qué especie pertenece el maestro Yoda?",
        "img": "./images/pregunta36.jpg",
        "respuestas": ["Una especie tridáctil desconocida", "Un jedi", "Un yadde","Un gasgano"],
    },
    {
        "pregunta": "¿Cuál es el indice de midiclorianos que tiene Anakin en sangre?",
        "img": "./images/pregunta37.jpg",
        "respuestas": ["Más 20 000 por célula", "Más de 30 000 por célula", "Más de 40 000 por célula", "Más de 50 000 por célula" ],
    },
    {
        "pregunta": "¿Cuál fue la primera escena de efectos especiales creada por Industrial & Magic?",
        "img": "./images/pregunta38.jpg",
        "respuestas": ["Ataque a la estrella de la muerte", "El escape de una capsula desde una nave rebelde", "La creación de Yoda", "El vuelo de un X-Wing pilotado por Luke Skywalker"],
    },
    {
        "pregunta": "¿Quién es el directos de: El retorno del Jedi?",
        "img": "./images/pregunta39.jpg",
        "respuestas": ["Richard Marquand", "JJ Abrams", "George Lucas", "Irvin Kershner"],
    },
    {
        "pregunta": "¿Qué quiere decir padawan?",
        "img": "./images/pregunta40.jpeg",
        "respuestas": ["Aprendiz de jedi", "Caballero jedi", "Maestro jedi", "Un Yaddle"],
    },
    {
        "pregunta": "Termina la frase: El miedo conduce a la ira y...",
        "img": "./images/pregunta41.jpg",
        "respuestas": ["la ira conduce al odio y el odio conduce al sufrimiento", "la ira conduce al sufrimiento y el sufrimiento al odio", "y la ira al lado oscuro de la fuerza", "La ira conduce al lado oscuro y el lado oscuro te conduce a la muerte"],
    },
    {
        "pregunta": "¿Quién es el director de: Una nueva esperanza?",
        "img": "./images/pregunta42.jpg",
        "respuestas": ["George Lucas","JJ Abrams", "Irvin Kershner", "Richard Marquand"],
    },
    {
        "pregunta": "¿Qué le responde Han Solo a la Princesa Leia cuando ella le dice que lo ama?",
        "img": "./images/preguntahanleia.jpg",
        "respuestas": ["Lo sé", "Te amo más, princesa", "El lado oscuro me impide sentir lo mismo", "Sabes que es reciproco"],
    },
    {
        "pregunta": "¿Quién compuso el opening de Star Wars?",
        "img": "./images/pregunta43.jpg",
        "respuestas": ["John Williams", "Danny Elfman", "George Lucas", "Ennio Morricone"],
    },
    {
        "pregunta": "¿Cuantos años vive un Ewok?",
        "img": "./images/pregunta44.jpg",
        "respuestas": ["60 años aproximadamente", "120 años aproximadamente", "300 años aproximadamente", "25 años aproximadamente"],
    },
    {
        "pregunta": "¿Cuál es el Ewok más famoso?",
        "img": "./images/pregunta45.jpg",
        "respuestas": ["Wicket", "Herder", "Farmer","Ninguno de los anteriores"],
    },
    {
        "pregunta": "¿Cómo se llama Wicket, la joven exploradora Ewok?",
        "img": "./images/pregunta46.jpg",
        "respuestas": ["Wystri Warric", "Mia", "Diana", "Amy"],
    },
    {
        "pregunta": "Los Ewoks son cazadores parecidos a...",
        "img": "./images/pregunta47.jpg",
        "respuestas": ["Osos de peluche","Monos","Reptiles","Perros"],
    },
    {
        "pregunta": "¿Quién fue la padawan de Anakin?",
        "img": "./images/pregunta48.jpg",
        "respuestas": ["Ahsoka", "Rey", "Padmé", "Leia"],
    },
    {
        "pregunta": "¿Quién mató a Han Solo?",
        "img": "./images/pregunta49.jpg",
        "respuestas": ["Su hijo, Ben Solo", "Darth Vader","Palpatine", "Stormtrooper"],
    },
    {
        "pregunta": "¿Quién entrena a Luke Skywalker?",
        "img": "./images/pregunta50.jpg",
        "respuestas": ["Maestro Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"],
    },
]

const printHTMLQuestion = (i) => {
    const p = trivia [i];
    let r = p.respuestas;
    respuestaCorrecta = r[0];

    r = r.sort((a,b) => Math.floor(Math.random() * 3) -1);

    
    const htmlRespuestasArray =  r.map(currentA => `<p class="respuesta"><button class="respuestaBoton"> X </button><span>${currentA}</span></p>`)
    const htmlRespuestas = htmlRespuestasArray.join ('  ')

    let htmlQuestionCode = `<p class="triviaPregunta">${cantidadDePreguntasPasadas}) ${p.pregunta}</p> 
                            <img class="imagenTrivia" src="${p.img}">
                            <div class="triviaRespuesta"> ${htmlRespuestas} </div>`;
    document.querySelector ('.pregunta').innerHTML = htmlQuestionCode;

    let botonesRespuesta = document.querySelectorAll(".respuestaBoton")
    botonesRespuesta.forEach((boton)=>{
        boton.addEventListener("click", ()=>{
            let valorRespuestaBoton=boton.nextElementSibling.innerText;
            evaluateAnswer(valorRespuestaBoton, boton);
        })
    })

    tiempo=15;
    document.querySelector('.tiempo').innerHTML = tiempo;
    clearInterval(intervaloTiempo);
    
    intervaloTiempo = setInterval ( () =>{
        tiempo--;
        if(tiempo == 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...Perdiste',
                text: 'Puedes volver a jugar!',   
              })
        
              clearInterval(intervaloTiempo);
        }
        else{
            document.querySelector('.tiempo').innerHTML = tiempo
        }      
    },1000)
}

const evaluateAnswer = (respuesta, obj ) => {
    const parentP = obj.parentNode;

    if (respuesta == respuestaCorrecta){
        parentP.classList.add('right');
        respuestasCorrectas++;
        document.querySelector('.rightCounter').innerHTML=respuestasCorrectas;
    }
    else{
        parentP.classList.add('wrong');
        respuestasIncorrectas++
        document.querySelector('.wrongCounter').innerHTML = respuestasIncorrectas;
    }
    setTimeout (() => siguientePregunta(), 1000)
}

const siguientePregunta = _ => {
    if(trivia.length > 0){
        let preguntaAleatoria = Math.round(Math.random()*(trivia.length -1))    
        cantidadDePreguntasPasadas ++
        printHTMLQuestion(preguntaAleatoria)
        trivia.splice(preguntaAleatoria, 1)
    }
    else{
        terminarTrivia()
    }
}

const terminarTrivia = () => {
    let puntaje = Number(document.getElementById("cantidadCorrectas").innerText)
    let imagen ;
    let textoImagen ; 
    let opcionesImagenes = []

     if(puntaje <= 20){
        opcionesImagenes = ["lukeperdergif.gif"]
        let randomIndex = Math.round(Math.random()*(opcionesImagenes.length -1))
        imagen = opcionesImagenes [randomIndex]
        textoImagen= "Parece que no viste las películas" 
    }
    else if (puntaje>20 && puntaje<=35){
        opcionesImagenes = ["chewbaccagif.gif"]
        let randomIndex = Math.round(Math.random()*(opcionesImagenes.length -1))
        imagen = opcionesImagenes [randomIndex]
        textoImagen= "Te falta repasar" 
    }
    else if (puntaje>35 && puntaje<=45){
        opcionesImagenes = ["obi-wangif.gif" , "hellotheregif.gif" ]
        let randomIndex = Math.round(Math.random()*(opcionesImagenes.length -1))
        imagen = opcionesImagenes [randomIndex]
        textoImagen= "Nada mal" 
    }
    else {
        opcionesImagenes = ["lukegif.gif"]
        let randomIndex = Math.round(Math.random()*(opcionesImagenes.length -1))
        imagen = opcionesImagenes [randomIndex]
        textoImagen= "La fuerza está contigo" 
    }

    clearInterval(intervaloTiempo)

    Swal.fire({
        html: textoImagen,
        width: 400,
        padding: '3em',
        color: '#716add',
        imageUrl: `./images/finalTrivia/${imagen}`,
        imageWidth: "auto",
        imageHeight: 200,
    })
}

let botonSiguiente = document.getElementById("siguientePregunta")
botonSiguiente.addEventListener("click", () => siguientePregunta())

siguientePregunta()

