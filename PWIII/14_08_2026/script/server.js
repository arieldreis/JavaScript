const btnBuscar = document.getElementById("buscar");

btnBuscar.addEventListener('click', buscarCep);

async function buscarCep() {
    // Inputs 
    const cepInput = document.getElementById("cep");
    const cep = cepInput.value;

    // Resultados HTML'S
    const resultado = document.getElementById("resultado");

    try {
        // Requisição API
        const reqApi = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await reqApi.json();

        resultado.innerHTML = `
        <p><strong>CEP:</strong> ${json.cep}<br></p>
        <p><strong>LOGRADOURO:</strong> ${json.logradouro}<br></p>
        <p><strong>BAIRRO:</strong> ${json.bairro}<br></p>
        <p>UF: ${json.uf}</p>
        <p><strong>ESTADO:</strong> ${json.estado}</p>
    `
    } catch (err) {
        resultado.innerHTML = `[ERRO] ao buscar a requisição do endpoint!`
    }
}
