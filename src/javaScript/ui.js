import api from "./api.js";

const ui = {
    async renderizarPets() {
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
    adicionarElements(pets) {
        const listPets = document.getElementById('pets-list');
        const li = document.createElement('li');
        li.setAttribute('data-id', pets.id);

        const img = document.createElement('img');
        img.src = pets.imagem;
        img.alt = ` imagem de animal: ${pets.nome}`;
        img.classList.add('imagePet')
        /* li.appendChild(img); */

        const h2 = document.createElement('h2');
        h2.innerText = pets.nome;

        const p = document.createElement('p');
        p.innerText = pets.raca;

        const span = document.createElement('span');
        span.innerText = pets.descricao;

        const button = document.createElement('button');
        button.classList.add('cadastro')
        button.innerText = "Quero Adotar";

        //Criando o botao de atualizar professor usou buttonEdit
        const buttonAtualizar = document.createElement('button');
        buttonAtualizar.classList.add('botao-atualizar');
        buttonAtualizar.onclick = () => {
            ui.formEdit(pets.id)

        }


        //Criando icone de editar
        const iconAtualizar = document.createElement('img')
        iconAtualizar.src = "./src/assets/image/lápis-24.png" // verificar caminho correto
        iconAtualizar.alt = "Imagem do icone de atualizar"
        iconAtualizar.classList.add('imageLoader');
        buttonAtualizar.appendChild(iconAtualizar);
        //Criando o botao de excluir

        const buttonExcluir = document.createElement('button');
        buttonExcluir.classList.add('botao-excluir');
        buttonExcluir.onclick = async()=>{
            try {
                await api.deletePet(pets.id);
                ui.renderizarPets
            } catch (error) {
                alert("Erro ao deletar e renderizar")
            }
        }

        // Criando icone de excluir

        const iconDelete = document.createElement('img');
        iconDelete.src = "./src/assets/image/lixeira.png"; // verificar caminho correto
        iconDelete.alt = "Imagem do icone de deletar";
        iconDelete.classList.add('imageDelete');
        buttonExcluir.appendChild(iconDelete);

        li.append(img, h2, p, span, button, buttonExcluir, buttonAtualizar)
        listPets.appendChild(li)
    },
    //Chamando formulario para controle de atualizacao
    async formEdit(petsId) {
        const pets = await api.buscarId(petsId);

        document.getElementById("pet-id").value = pets.id;
        document.getElementById("nome").value = pets.nome;
        document.getElementById("raca").value = pets.raca;
        document.getElementById("descricao").value = pets.descricao;
        document.getElementById("imagem").value = pets.imagem;
    }
}

export default ui