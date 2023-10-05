const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const question_Element = document.getElementById('question')
const input_Element = document.getElementById('input')
const form_Element = document.getElementById('form')
const score_Element = document.getElementById('score')

// Inicializar la puntuación desde el almacenamiento local
// y establecerla en 0 si no existe
let score = JSON.parse(localStorage.getItem('score'))
if (!score) {
    score = 0
}

score_Element.innerText = `score: ${score}`
question_Element.innerText = `What is ${num1} multiply by ${num2}?`
const correct_Answer = num1 * num2

//Se agrega un event listener al formulario (form_Element) 
//para escuchar cuando el usuario envíe una respuesta.
form_Element.addEventListener('submit', () => {

    // Obtener la respuesta del usuario y convertirla a un número
    const userAns = +input_Element.value
    
    if (userAns === correct_Answer) {
        score++
        updateLocalStorage()

    } else {
        score--
        updateLocalStorage()

    }
})

// Función para actualizar la puntuación en el almacenamiento local
function updateLocalStorage() {
localStorage.setItem('score',JSON.stringify(score))
}

