document.addEventListener('DOMContentLoaded',init);

const seletor = (tag) => document.querySelector(tag);

function init() {

    const btnGerar = seletor('#btn-gerar');
    const qtdParagrafos = seletor('#qtd-paragrafos');
    const painel = seletor('main');

    //  Variáveis Parte 2

    const formAlterar = seletor('.alterar-paragrafos');
    const btnAlterar = seletor('#btn-alterar');
    const paragrafoAterar = seletor('#paragrafo-alterar');

    btnGerar.addEventListener('click',function(){

        painel.textContent = '';

        const conteudo = gerarParagrafos(Number(qtdParagrafos.value));

        painel.appendChild(conteudo);

        formAlterar.style.display = 'flex';

    });

    btnAlterar.addEventListener('click',function(){
        
        const arrParagrafos = document.querySelectorAll('p');
        
        const p = arrParagrafos[Number(paragrafoAterar.value)];

        alterarParagrafo(p);
    });

}

function gerarParagrafos(qtd) {

    const divPai = document.createElement('div');

    for (let i = 0; i < qtd; i++) {

        const paragrafo = document.createElement('p');
        paragrafo.textContent = `  PARÁGRAFO ${i}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime illum voluptate perferendis, impedit ratione aliquid quo ipsum accusantium saepe. Itaque incidunt nemo ullam temporibus. Quibusdam fuga tenetur quasi ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime illum voluptate perferendis, impedit ratione aliquid quo ipsum accusantium saepe. Itaque incidunt nemo ullam temporibus. Quibusdam fuga tenetur quasi ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime illum voluptate perferendis, impedit ratione aliquid quo ipsum accusantium saepe. Itaque incidunt nemo ullam temporibus. Quibusdam fuga tenetur quasi ratione.`;

        divPai.appendChild(paragrafo);

    }

    return divPai;

}

function alterarParagrafo(paragrafo) {

    const span = document.createElement('span');
    span.textContent = ' Novo conteúdo do parágrafo ';

    paragrafo.appendChild(span);

}