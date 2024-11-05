// Definimos la URL base de la API do ViaCEP
const urlBase = "https://viacep.com.br/ws/";

// Exportamos una función asincrónica que obtiene los datos de un CEP
export async function getCEPData(cep, element) {
    // Generamos la URL completa para hacer la solicitud a la API, usando el CEP proporcionado
    const url = `${urlBase}${cep}/json/`; // URL dinámica con el CEP

    // Creamos un objeto Headers para especificar que el tipo de contenido es JSON
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    try {
        // Hacemos una solicitud HTTP usando fetch a la URL generada, pasando los encabezados
        const response = await fetch(url, { headers: headers });
        
        // Si la respuesta no es OK (código de estado no exitoso), lanzamos un error
        if (!response.ok) {
            throw new Error("Erro ao buscar CEP");
        }

        // Convertimos la respuesta a formato JSON
        const data = await response.json();
        
        // Verificamos si la API nos devuelve un error (por ejemplo, si el CEP no existe)
        if (data.erro) {
            // Si el CEP no se encuentra, mostramos un mensaje de error en el elemento
            element.innerHTML = "CEP não encontrado!";
        } else {
            // Si el CEP es válido, mostramos los datos obtenidos en el elemento
            element.innerHTML = `
                <strong>Logradouro:</strong> ${data.logradouro}, ${data.complemento} <br>
                <strong>Bairro:</strong> ${data.bairro} <br>
                <strong>Cidade/Estado:</strong> ${data.localidade}/${data.uf} <br>
                <strong>CEP:</strong> ${data.cep} <br>
                <strong>DDD:</strong> ${data.ddd} <br>
                <strong>Região:</strong> ${data.regiao} <br>
            `;
        }
    } catch (error) {
        // Si hay un error en la solicitud (por ejemplo, problemas de red o de API), mostramos un mensaje genérico
        console.error("Erro na requisição:", error.message);
        element.innerHTML = "Algo deu errado, tente novamente mais tarde!"; // Mensaje de error genérico
    }
}
