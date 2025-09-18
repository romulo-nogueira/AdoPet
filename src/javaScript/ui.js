import api from "./api.js";

const ui = {
    async renderizarPets(){
        const listPets = document.getElementById('pets-list');

        try {
            const pets = await api.obterPets();
             pets.forEach(ui.adicionarElements) /*=> {
                listPets.innerHTML += ` 
                 <li data-id ="${item.id}" >
                  <img src="${item.imagem}" alt="${item.imagem}"/>
                  <h2>${item.nome}</h2>
                  <p>${item.raca}</p>
                  <span>${item.descricao}</span> 
                  <button>Adote</button> 
                </li>
                `
               
            }) */
        } catch (error) {
            alert("Falha ao renderizar a api")
            throw error
        }
    },
    adicionarElements(pets){
        const listPets = document.getElementById('pets-list');
        const li = document.createElement('li');
        li.setAttribute('data-id', pets.id);

        const img =document.createElement('img');
        img.src = pets.imagem;
        img.alt = ` imagem de animal: ${pets.nome}`;
        /* li.appendChild(img); */

        const h2 = document.createElement('h2');
        h2.innerText = pets.nome;

        const p = document.createElement('p');
        p.innerText = pets.raca;

        const span = document.createElement('span');
        span.innerText = pets.descricao;

        const button = document.createElement('button');
        button.innerText = "Quero Adotar";

        //Criando o botao de atualizar
        const buttonAtualizzar = document.createElement('button');
        buttonAtualizzar.classList.add('botao-excluir');

        //Criando icone de editar
        const iconAtualizar = document.createElement('img')
        iconAtualizar.src = "./src/assets/image/atualizar.png" // verificar caminho correto
        iconAtualizar.alt = "Imagem do icone de atualizar"
        buttonAtualizzar.appendChild(iconAtualizar);
        //Criando o botao de excluir

        const buttonExcluir = document.createElement('button');
        buttonExcluir.classList.add('botao-excluir');

        // Criando icone de excluir

        const iconDelete = document.createElement('img')
        iconDelete.src = "./src/assets/image/lixeira.png" // verificar caminho correto
        iconDelete.alt = "Imagem do icone de deletar"
        buttonExcluir.appendChild(iconDelete);

        li.append(img, h2, p, span, button,buttonExcluir,buttonAtualizzar )
        listPets.appendChild(li)
    }
}

export default ui