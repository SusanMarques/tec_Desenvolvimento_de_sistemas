// adicionando a variavel formulario ao id dele
const formulario = document.getElementById('formulario') as HTMLElement



formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = (document.getElementById('nome') as HTMLInputElement).value;

    const telefone = (document.getElementById('telefone') as HTMLInputElement).value;

    const dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;

    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

    const dados = `
    Dados coletados:<br>
    Nome: ${nome}<br>
    CPF: ${cpf}<br>
    Email: ${email}<br>
    data de nascimento: ${dataNascimento}<br>
    telefone: ${telefone}<br>
    
    `

    const exibir = document.getElementById('resposta');

    if(exibir){
        exibir.innerHTML = dados
    }
});