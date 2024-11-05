import '../css/style.css';
import { getCEPData } from "./fetchCEP.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1>
    <div>
        <input type="text" name="cep" id="cep_field" placeholder="Digite o CEP">
        <button type="submit" id="cep_get">GET</button>
    </div>
    <h2 id="cep">-</h2>
  </div>
`;

const cepField = document.querySelector('#cep_field');
const cepButton = document.querySelector('#cep_get');
const cepDisplay = document.querySelector('#cep');

cepButton.addEventListener('click', () => {
  const cepValue = cepField.value.trim(); // Obtenemos el valor del campo input

  if (cepValue) {
    // Llamamos a la función getCEPData y le pasamos el valor del campo cep
    getCEPData(cepValue, cepDisplay);
  } else {
    // Si no hay valor, mostramos un mensaje de advertencia
    cepDisplay.textContent = "Por favor, insira um CEP válido!";
  }
});
