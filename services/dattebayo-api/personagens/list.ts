const API_HOST = 'https://dattebayo-api.onrender.com';

export async function fetchPersonagens () {
    try{

        const response = await fetch(`${API_HOST}/characters`);

        if(!response.ok){
            throw new Error(`Erro Na Requisição: ${response.statusText}`);
        

        const data = await response.json();

        return data;


    }}catch(error) {
        console.error(`Erro ao Buscar Personagem : ${error}` )
        return [];
    }
}




