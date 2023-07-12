//El DOM es una representación del documento HTML como un grupo de nodos y objetos. 
//Determinando así la forma en la cual se puede acceder y modificar la estructura, contenido y estilo de un documento HTML. 


//const p = document.querySelector("p")
//const parrafito = document.querySelector("parrafito")
//const pid = document.querySelector("#pid")



//h1.innerHTML = "Patito <br> feo" para cambiar el texto del titulo desde js
//h1.innerText = "Patito <br> feo"
//console.log (h1.getAttribute("class"));
//h1.setAttribute ("class", "rojo"); modifica el valor de la clase

//h1.classList.add("rojo");
//h1.classList.remove("verde");
//h1.classList.toggle("verde");
//h1.classList.contains("verde"); //devuelve true o false

//input.value ="4,5,r" para cambiar lo que queramos que diga dentro del input

//const img = document.createElement("img");        //ayuda a crear el elemento html que querramos
//img.setAttribute("src","https://culturadiversa.es/wp-content/uploads/2019/08/Cr%C3%ADtica-Lover-de-Taylor-Swift-canci%C3%B3n-a-canci%C3%B3n-620x420.jpg");
//console.log (img);
//pid.appendChild(img); para agregar la imagen

//pid.replaceChildren(img); se puede reemplazar de las 2 formas
//pid.innerHTML = "";

//onchange="console.log("Cambió el input") te avisa en la consola cuando escribieron algo en el input y para el btn onclick
const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");


function sumarInputValues(event) {                           //llamar boton desde html
    event.preventDefault();   //para que no se recargue la pagina por el submit                             
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs; 
}

//otra forma para no agregar el prevent default es ponerle al p tipe"button" 

//btn.addEventListener ("click", btnOnClick) //llamar funcion boton desde js

form.addEventListener ("submit", sumarInputValues)