
Aplicación de multiplicación simple
 * Autor: [Guerson Rodriguez]
 * Fecha de creación: 01/10/2023
 * Descripcion: Este código es una pequeña aplicación web que genera dos números aleatorios entre 1 y 10, muestra una pregunta de multiplicación y permite al usuario responder. La aplicación lleva un registro de la puntuación del usuario, aumentando la puntuación si la respuesta es correcta y disminuyéndola si la respuesta es incorrecta. Además, utiliza el almacenamiento local para mantener la puntuación entre sesiones del usuario. Aquí tienes una explicación paso a paso:

#1. Se generan dos números aleatorios entre 1 y 10 (inclusive) utilizando Math.random() y Math.ceil() para asegurarse de que los números sean enteros.

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

#2. Se obtienen referencias a elementos HTML en la página utilizando document.getElementById(). Estos elementos se utilizan para mostrar la pregunta, recibir la respuesta del usuario y mostrar la puntuación.

const question_Element = document.getElementById('question');
const input_Element = document.getElementById('input');
const form_Element = document.getElementById('form');
const score_Element = document.getElementById('score');

#3. Se verifica si ya existe una puntuación en el almacenamiento local del navegador (por ejemplo, si el usuario ya ha jugado antes). Si no existe, se inicializa la puntuación en 0.

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}

#4. Se muestra la puntuación actual del usuario y la pregunta de multiplicación en la página.

score_Element.innerText = score: ${score};
question_Element.innerText = What is $num1 multiply by ${num2}?

#5 Se calcula la respuesta correcta multiplicando los dos números aleatorios generados anteriormente.

const correct_Answer = num1 * num2;

#6 //Se agrega un event listener al formulario (form_Element) para escuchar cuando el usuario envíe una respuesta.

form_Element.addEventListener('submit', () => {
    const userAns = +input_Element.value;
    
    if (userAns === correct_Answer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

Cuando el usuario envía una respuesta, se compara la respuesta del usuario con la respuesta correcta. Si es correcta, se aumenta la puntuación y se llama a la función updateLocalStorage(). Si es incorrecta, se disminuye la puntuación y también se llama a updateLocalStorage(). La función updateLocalStorage() se encarga de guardar la puntuación actual en el almacenamiento local del navegador para que persista entre sesiones del usuario.

Codigo:

// Generar dos números aleatorios entre 1 y 10
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Obtener referencias a elementos HTML en la página
const question_Element = document.getElementById('question');
const input_Element = document.getElementById('input');
const form_Element = document.getElementById('form');
const score_Element = document.getElementById('score');

// Inicializar la puntuación desde el almacenamiento local o establecerla en 0 si no existe
let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}

// Mostrar la puntuación actual en la página
score_Element.innerText = `score: ${score}`;

// Mostrar la pregunta de multiplicación en la página
question_Element.innerText = `What is ${num1} multiply by ${num2}?`;

// Calcular la respuesta correcta
const correct_Answer = num1 * num2;

// Agregar un event listener al formulario para manejar las respuestas del usuario
form_Element.addEventListener('submit', () => {

    // Obtener la respuesta del usuario y convertirla a un número
    const userAns = +input_Element.value;
    
    // Comparar la respuesta del usuario con la respuesta correcta
    if (userAns === correct_Answer) {
        // Si es correcta, aumentar la puntuación y actualizar el almacenamiento local
        score++;
        updateLocalStorage();
    } else {
        // Si es incorrecta, disminuir la puntuación y actualizar el almacenamiento local
        score--;
        updateLocalStorage();
    }
});

// Función para actualizar la puntuación en el almacenamiento local
function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}
