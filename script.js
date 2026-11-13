// Selecciona el contenedor que agrupa todas las diapositivas del carrusel
const slides = document.querySelector(".slides")

// Selecciona todas las diapositivas individuales y las guarda en una lista
const slide = document.querySelectorAll(".slide")

// Variable que guarda la posición actual del carrusel
let index = 0

// Selecciona el botón con id "next" y define la acción que ocurre al hacer clic
document.getElementById("next").onclick = () =>{

// Aumenta el índice para pasar a la siguiente diapositiva
index++

// Si el índice supera la cantidad de diapositivas, vuelve a la primera
if(index >= slide.length) index = 0

// Llama a la función que actualiza la posición del carrusel
updateSlide()

}

// Selecciona el botón con id "prev" y define la acción al hacer clic
document.getElementById("prev").onclick = () =>{

// Disminuye el índice para regresar a la diapositiva anterior
index--

// Si el índice es menor que 0, se mueve a la última diapositiva
if(index < 0) index = slide.length -1

// Llama a la función que actualiza la posición del carrusel
updateSlide()

}

// Función que mueve el carrusel horizontalmente
function updateSlide(){

// Aplica una transformación CSS para desplazar las diapositivas
// El movimiento depende del índice actual
slides.style.transform = `translateX(-${index*100}%)`

}

// Selecciona todos los botones que tienen la clase "seeMore"
const buttons = document.querySelectorAll(".seeMore")

// Recorre cada botón encontrado
buttons.forEach(btn =>{

// Agrega un evento que se ejecuta cuando el botón recibe un clic
btn.addEventListener("click",()=>{

// Obtiene el elemento padre del botón (el contenedor del texto)
let content = btn.parentElement

// Activa o desactiva la clase "active" para mostrar u ocultar el texto
content.classList.toggle("active")

})

})