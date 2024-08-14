document.addEventListener('DOMContentLoaded',init);

function seletor(tag) {
    return document.querySelector(tag);
}

function init() {

    const nomeC = seletor('#nome');
    const emailC = seletor('#email');
    const senhaC = seletor('#senha');
    const senhaConfirmarC = seletor('#senha-confirmar');
	
    const btn = seletor('#btn');
	
	const divAlerta = seletor('#msg-alerta');
	const formulario = seletor('form');
	const secao = seletor('section');

    btn.addEventListener('click',function(){
		
		divAlerta.textContent = '';

        const nome = nomeC.value;
        const email = emailC.value;
        const senha = senhaC.value;
        const senhaConfirmar = senhaConfirmarC.value;
		
		const verificarCampos = verificacao(nome,email,senha,senhaConfirmar);
		
		if (verificarCampos) {
			
			divAlerta.textContent = verificarCampos;
			
		} else {
			formulario.style.display = 'none';
			secao.style.display = 'flex';
		}
		
    });

}

function verificacao (nome,email,senha,senhaConfirmar) {

   const confirmarNome = verificacaoNome(nome);

   const confirmarEmail = verificacaoEmail(email);

   const verificarSenha = verificacaoSenha(senha);

   if (!confirmarNome) {
        return 'Nome inválido, deve ser formado ao menos por Nome e Sobrenome.'
   }

   if (!confirmarEmail) {
        return 'Email inválido';
   }

   if (verificarSenha) {
	   return verificarSenha;
   }
   
   if (senha != senhaConfirmar) {
	   return 'O campo de senha e de confirmação de senha devem ser iguais.';
   }

	return false;

}

function verificacaoNome(nome) {

    const regex = new RegExp('([a-zA-Z-á-ú]{1,})\ ([a-z-A-Z-á-ú])');

    return regex.test(nome);

}

function verificacaoEmail(email) {

    const regex = new RegExp('^([a-z][0-9]|[0-9]|[a-z])+\@[a-z]+\.(com|net)(\.br)?$');

    return regex.test(email);

}

function verificacaoSenha(senha) {

    const tamanho = new RegExp('^[a-zA-Z0-9._%+-]{6}$');
    const maiuscula = new RegExp('[A-Z]');
    const numero = new RegExp('[0-9]');
    
    if (!tamanho.test(senha)) {
        return 'A senha deve ter 6 caractéres.';
    }
    
    if (!maiuscula.test(senha)) {
        return 'A senha deve conter ao menos uma letrá maiúscula.';
    }
    
    if (!numero.test(senha)) {
        return 'A senha deve conter ao menos um número.';
    }
    
    return false;
	
}