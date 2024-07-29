/* O desafio é criar uma página HTML com dois campos texto e um botão.
 Cada campo de texto deve receber um número.
 O primeiro campo de texto vai representar a quantidade de linhas de uma tabela.
 O segundo campo de texto vai representar a quantidade de colunas de uma tabela.
 Ao clicar no botão, deve ser executado um código JS que cria dinamicamente uma tabela com N linhas e X
 colunas.
 Para criar a tabela, você deve usar funções como:
 document.createElement()
 .appendChild()
*/


const seletor = (tag) => document.querySelector(tag);

document.addEventListener('DOMContentLoaded',function(){

    const linhas = seletor('.linha');
    const colunas = seletor('.coluna');
    const painel = seletor('main')

    const btnGerar = seletor('button');

    btnGerar.addEventListener('click',function(){

        btnAcao(linhas,colunas,painel);

    });

});

function btnAcao(l,c,painel) {

    painel.textContent = '';

    const linha = l.value;
    const coluna = c.value;

    gerarTabela(linha,coluna,painel);

}

function gerarTabela(l,c,painel) {

    const tabela = document.createElement('table');

    for (i = 0; i < l; i++) {

        const tr = document.createElement('tr');
        
        for (j = 0; j < c; j++) {

            const td = document.createElement('td');
            td.textContent = `${i} ${j}`;

            tr.appendChild(td);

        }

        tabela.appendChild(tr);

    }

    painel.appendChild(tabela);

}