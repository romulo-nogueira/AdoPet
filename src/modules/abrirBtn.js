export default function initAbrirForm(buttonId, sectionClass){

    const btn = document.getElementById(buttonId);
    const section = document.querySelector(`.${sectionClass}`);

    if (!btn || !section) {
    console.error("Botão ou section não encontrados!");
    return;
  }

    btn.addEventListener("click", () =>{
        section.classList.toggle("ativo");
    });
}