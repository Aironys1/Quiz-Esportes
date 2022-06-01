let atencao = ("Esse é um quiz ainda está em atualização, será incluindo mais perguntas e aumentaremos a dificuldade das perguntas."+"\n\n\n"+"Clique em Ok para JOGAR");
let quebra = '\n'


alert(atencao)
//Exibindo o primeiro bloco de pergunta

document.getElementsByClassName('container')[0].style.display = "block";

//Definindo a próxima função

function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";

}

//Obtendo resultado final
function resultado() {
    let score = 0;

    if (document.getElementById('correta1').checked) {
        score ++;
    }
    
    
    if (document.getElementById('correta2').checked) {
        score ++;
    }
    
    
    if (document.getElementById('correta3').checked) {
        score ++;
    }
    
    
    if (document.getElementById('correta4').checked) {
        score ++;
    }

    if (document.getElementById('correta5').checked) {
        score ++;
    }



    
    alert(" Sua pontuação TOTAL: "+score);
}
