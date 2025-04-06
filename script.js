function CalcularImc() {
    // pegando peso e altura
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // pegando elementos da DOM
    let resultadoDiv = document.getElementById('resultado');
    let mensagem = document.getElementById('mensagem');
    let imagem = document.getElementById('imagem-status');

    // verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos");
        return;
    }

    // limpando conteúdo anterior
    resultadoDiv.innerHTML = ''; 

    // cálculo do IMC
    let imc = peso / (altura * altura);
    resultadoDiv.style.display = 'block';

    // definindo variáveis de mensagem, imagem e link
    let texto = '';
    let imgSrc = '';
    let linkHref = '';

    if (imc <= 18.5) {
        texto = `Seu IMC é: ${imc.toFixed(2)} - Você está abaixo do peso ideal.`;
        imgSrc = 'img/1.png';
        linkHref = 'telas/abaixo.html'; // abaixo do peso
    } else if (imc > 18.5 && imc <= 24.9) {
        texto = `Seu IMC é: ${imc.toFixed(2)} - Você está no peso ideal.`;
        imgSrc = 'img/2.png';
        linkHref = 'telas/ideal.html' // peso normal
    } else if (imc > 25 && imc <= 29.9) {
        texto = `Seu IMC é: ${imc.toFixed(2)} - Você está acima do peso.`;
        imgSrc = 'img/3.png';
        linkHref = 'telas/acima.html' // sobrepeso
    } else if (imc > 30 && imc <= 34.9) {
        texto = `Seu IMC é: ${imc.toFixed(2)} - Você está na obesidade grau I.`;
        imgSrc = 'img/4.png';
        linkHref = 'telas/grau1.html' // obesidade I
    } else if (imc > 35 && imc <= 39.9) {
        texto = `Seu IMC é: ${imc.toFixed(2)} - Você está na obesidade grau II.`;
        imgSrc = 'img/5.png';
        linkHref = 'telas/grau2.html'; // obesidade II
    } else if (imc > 40) {
        texto = `Seu IMC é: ${imc.toFixed(2)} - Você está na obesidade mórbida.`;
        imgSrc = 'img/6.png';
        linkHref = 'telas/grau3.html'; // obesidade III
    }

    // exibindo mensagem e imagem
    mensagem.textContent = texto;
    imagem.src = imgSrc;
    resultadoDiv.appendChild(mensagem);
    resultadoDiv.appendChild(imagem);

    // criando botão de ver mais
    let vermais = document.createElement('button');
    vermais.textContent = `Ver mais`;
    vermais.onclick = () => {
        window.open(linkHref, '_blank');
    };
    resultadoDiv.appendChild(vermais);
}