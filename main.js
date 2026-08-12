const numeroSenha= document.querySelector('.parametro-_texto');
let tamanhoSenha=12;//variavel que pode ser alterada

numeroSenha.textContent=tamanhoSenha;//atribui o valor do "tamanhoSenha" ao "numeroSenha"
const botoes=document.querySelector(parametro-senha_botao);//selecionando todas as classse "parametro-senha_botao"

botoes[0].onclick=diminuiTamanho;
function diminuiTamanho() {
tamanhoSenha=tamanhoSenha-1;//diminui de 1 o valor do "tamanhoSenha"
numeroSenha.textContent=tamanhoSenha;//atribui o valor do "tamanhoSenha" ao "numeroSenha"
}


botoes[1].onclick=aumentaTamanho;
function aumentaTamanho() {
tamanhoSenha=tamanhoSenha+1;//aumenta de 1 o valor do "tamanhoSenha"
numeroSenha.textContent=tamanhoSenha;//atribui o valor do "tamanhoSenha" ao "numeroSenha"
}