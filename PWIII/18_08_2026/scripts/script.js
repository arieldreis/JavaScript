const typeWeather = document.getElementById('searchWeather');

async function queryWeather(){

    const weatherValue = typeWeather.value;
    // Mostra o resultado da api que irá aparecer no navegador.
    const resultado = document.querySelector('.resultado');
    try{
        // Busca os dados do endpoint através da cidade solicitada pelo usuário
        const fetchData = await fetch(`
            https://geocoding-api.open-meteo.com/v1/search?name=${weatherValue}`
        );
        // transforma os dados da API no formato json
        const weatherJson = await fetchData.json();

        // Descobri a latitude e logitude.
        const latidude = weatherJson.results[0].latitude;
        const longitude = weatherJson.results[0].longitude;

        // Descobrir os dados de clima atráves da latidude e longitude
        const meteoFetch = await fetch(`
            https://api.open-meteo.com/v1/forecast?latitude=${latidude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m

        `);
        // transforma os dados da API no formato json
        const responseMeteo = await meteoFetch.json();

        // Obtendo os dados do objeto
        const pais = weatherJson.results[0].country;
        const estado = weatherJson.results[0].admin1;
        const cidade = weatherJson.results[0].name;
        const temperatura = responseMeteo.current.temperature_2m;
        const sensacao_termica = responseMeteo.current.apparent_temperature;
        const umidade = responseMeteo.current.relative_humidity_2m;
        const vento = responseMeteo.current.wind_speed_10m;

        // Mostra no navegador os dados gerados pela API
        resultado.innerHTML = `
            <h2>${estado}</h2>
            <ul id="listas">
                <li>País: ${pais}</li>
                <li>Temperatura: ${temperatura}°C</li>
                <li>Sensação Térmica: ${sensacao_termica}°C</li>
                <li>Umidade: ${umidade}%</li>
                <li>Vento: ${vento}</li>
            </ul>
        `;
        // Limpa o input
        typeWeather.value = "";

    } catch(err) {
        // Esse bloco tem a função onde caso algum erro na api o código pula para esse bloco
        console.log(`Erro!`);
    }

}
