import api from "./api.js";

const ui = {
    async renderizarPets(){
        const listPets = document.getElementById('pets-list');

        try {
            const pets = await api.obterPets();
            pets.forEach(item => {
                listPets.innerHTML += ` 
                 <li data-id ="${item.id}" >
                  <img src="${item.imagem}" alt="${item.imagem}"/>
                  <h2>${item.nome}</h2>
                  <p>${item.raca}</p>
                  <span>${item.descricao}</span> 
                  <button></button> 
                </li>
                `
               
            })
        } catch (error) {
            alert("Falha ao renderizar a api")
            throw error
        }
    }
}

export default ui