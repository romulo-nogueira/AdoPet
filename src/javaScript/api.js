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
    },
    // Metodo de atualizar

    //1° passo pegar o ID

    async buscarId(id){
        try { const response = await fetch(`http://localhost:3000/pets/${id}`);
        return await response.json();
            
        } catch (error) {
            alert("Falha ao buscar ID")
            throw error;
        }
    },

    // 2º passo - atualizar os dados

    async atualizarPets(pets){
        try {
            const response = await fetch(`http://localhost:3000/pets/${pets.id}`, {
                method:"PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pets)
            });
            return await response.json()
        } catch (error) {
            alert("Erro ao efetuar a atualizacão do pet");

            throw error;
        } 
    },
     // Deletando dados
     
     async deletePet(id){
        try {
            const response = await fetch(`http://localhost:3000/pets/${id}`,{
                method:"DELETE"
                
            })
            return await response.json()
        } catch (error) {
            alert("Erro ao deletar pet")
            throw error;
        }
     }
    
    
    
    }


export default api