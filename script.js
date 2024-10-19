function verificar() {
    // VARIAVEIS
    
    // Coletando valores dos campos
    let anoNascimento = document.getElementById("coletaAno").value;
    let anoAtual = new Date().getFullYear(); // Obtém o ano atual
    let idade = anoAtual - anoNascimento;

    // Coletando sexo
    let sexoMasc = document.getElementById("radioMasc").checked;
    let sexoFem = document.getElementById("radioFem").checked;

    // Criando objetos para resultado e foto
    let resultado = document.getElementById("informaResultado");
    let fotoPessoa = document.getElementById("fotoPessoa");
    let secaoResultado = document.getElementById("secaoResultado"); 
    
    //Auxiliares
    let mensagem = "";
    let imgSrc = "";
    let genero = Boolean;
    

    // Limpa o resultado anterior
    resultado.innerHTML = "";
    fotoPessoa.src = "";    

    // Validação
    if (!anoNascimento || anoNascimento > anoAtual || anoNascimento < 1900) {
        alert("Preencha um ano de nascimento válido!");                
        return;
    }

    if (!sexoMasc && !sexoFem) {
        alert("Preencha o sexo!");        
        return;
    }

    genero = sexoMasc ? "Homem" : "Mulher"; //Verifica o gênero preenchido e atribui a variável genero

    // Verificando a faixa etária e atribuindo a mensagem e a imagem correspondente
    if (idade < 4) {
        mensagem = `O que um bebê de ${idade} anos está fazendo aqui?`;
        imgSrc = "img/bebe.jpg";
    } else if (idade < 13) {
        mensagem = `Detectado(a) ${genero} de ${idade} anos.`;
        imgSrc = sexoMasc ? "img/menino_crianca.jpg" : "img/menina_crianca.jpg";
    } else if (idade < 18) {
        mensagem = `Detectado(a) ${genero} de ${idade} anos.`;
        imgSrc = sexoMasc ? "img/menino_adolescente.jpg" : "img/menina_adolescente.jpg";
    } else if (idade < 30) {
        mensagem = `Detectado(a) ${genero} de ${idade} anos.`;
        imgSrc = sexoMasc ? "img/homem_jovem.jpg" : "img/mulher_jovem.jpg";
    } else if (idade < 55) {
        mensagem = `Detectado(a) ${genero} de ${idade} anos.`;
        imgSrc = sexoMasc ? "img/homem.jpg" : "img/mulher.jpg";
    } else {
        mensagem = `Detectado(a) ${genero} de ${idade} anos.`;
        imgSrc = sexoMasc ? "img/idoso.jpg" : "img/idosa.jpg";
    }

    // Exibe o resultado e a imagem correspondente
    resultado.innerHTML = mensagem;
    fotoPessoa.src = imgSrc;    
    
    // Limpando campo e retornando foco
    coletaAno.value = "";           
    coletaAno.focus(); 
    

}
