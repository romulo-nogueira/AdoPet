const api = {
    async obterPets(){
        // Metodo que vai lidar com o tratamento de erros -  se houver erro nao trava o codigo todo, apenas o bloco do erro

        try {
            const response = await fetch('http://localhost:3000/pets')
            return await response.json()
        } catch (error) {
            alert("Erro ao fazer requisição")
            throw error
        }
    },
    
    async adicionarPets(pets){
        try {
            const response = await fetch('http://localhost:3000/pets', {
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(pets)
            });
            return await response.json(); 
        } catch (error) {
            alert("Erro ao cadastrar novo pet");
            throw error;
            
        }
    }
}

export default api