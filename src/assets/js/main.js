// Importa los estilos CSS para la página
import '../css/style.css';

// Importa la función getCEPData desde fetchCEP.js, que probablemente se encarga de hacer la solicitud a la API del CEP
import { getCEPData } from "./fetchCEP.js";

// Inserta el contenido HTML dentro del elemento con id "app" en el DOM
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1> <!-- Título principal que pregunta por el CEP -->
    <div>
        <input type="text" name="cep" id="cep_field" placeholder="Digite o CEP"> <!-- Campo de entrada para el CEP -->
        <button type="submit" id="cep_get">GET</button> <!-- Botón para obtener los datos del CEP -->
    </div>
    <h2 id="cep">-</h2> <!-- Elemento donde se mostrarán los resultados o mensajes -->
  </div>
`;

// Selecciona el campo de entrada del CEP por su id y lo almacena en una variable
const cepField = document.querySelector('#cep_field');

// Selecciona el botón por su id y lo almacena en una variable
const cepButton = document.querySelector('#cep_get');

// Selecciona el elemento donde se mostrará el resultado o mensaje por su id
const cepDisplay = document.querySelector('#cep');

// Añade un evento al botón para que, al hacer clic, se ejecute una función
cepButton.addEventListener('click', () => {
  // Obtiene el valor del campo de entrada y elimina los espacios en blanco al inicio y al final
  const cepValue = cepField.value.trim(); 

  // Verifica si el campo de entrada no está vacío
  if (cepValue) {
    // Si hay un valor, llama a la función getCEPData y le pasa el valor del CEP y el lugar donde se mostrarán los resultados
    getCEPData(cepValue, cepDisplay);
  } else {
    // Si el campo está vacío, muestra un mensaje de advertencia en el lugar donde se deben mostrar los resultados
    cepDisplay.textContent = "Por favor, insira um CEP válido!"; // Mensaje que pide un CEP válido
  }
});
