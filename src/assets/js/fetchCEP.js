const urlBase = "https://viacep.com.br/ws/";

export async function getCEPData(cep, element) {
    const url = `${urlBase}${cep}/json/`; // Generamos la URL con el CEP dinámico
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    try {
        const response = await fetch(url, { headers: headers });
        
        if (!response.ok) {
            throw new Error("Erro ao buscar CEP");
        }

        const data = await response.json();
        
        if (data.erro) {
            element.innerHTML = "CEP não encontrado!";
        } else {
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
        console.error("Erro na requisição:", error.message);
        element.innerHTML = "Algo deu errado, tente novamente mais tarde!";
    }
}
