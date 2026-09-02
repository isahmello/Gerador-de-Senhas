const numeroSenha= document.querySelector('.parametro-_texto');
let tamanhoSenha=12;//variavel que pode ser alterada

botoes[0].onclick=diminuiTamanho();
botoes[1].onclick=aumentaTamanho();


numeroSenha.textContent=tamanhoSenha;//atribui o valor do "tamanhoSenha" ao "numeroSenha"
const botoes=document.querySelectorAll(parametro-senha_botao);//selecionando todas as classse "parametro-senha_botao"


function {
    if(tamanhoSenha<1){
tamanhoSenha=tamanhoSenha-1;//diminui de 1 o valor do "tamanhoSenha"     
tamanhoSenha--;
}
numeroSenha.textContent=tamanhoSenha;//atribui o valor do "tamanhoSenha" ao "numeroSenha"
diminuiTamanho();
}

function aumentaTamanho() {
    if (tamanhoSenha>20){
 //tamanhoSenha=tamanhoSenha+1;//aumenta de 1 o valor do "tamanhoSenha"    
 tamanhoSenha++;
    }

numeroSenha.textContent=tamanhoSenha;//atribui o valor do "tamanhoSenha" ao "numeroSenha"
geraSenha();
}

const campoSenha=document.querySelector(#campo-senha);
const letrasMaiusculas='ABCDEFG';



function geraSenha(){
let senha = '';
for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
}
campoSenha.value = senha;
}
