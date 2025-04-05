//calculo do imc
function CalcularImc(){
    //pegando peso e altura
    let peso =parseFloat (document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    
    //pegando resultado
    let resultadoDiv = document.getElementById('resultado')
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem-status')
    //verificando valores reais

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos");
        return;
    }

    //calculo de imc
   
    let imc = peso / (altura * altura)
    
    if (imc <= 18.5 ){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está abaixo do peso ideal`
        imagem.src = 'img/abaixo.png'
    }

    else if((imc > 18.5) & (imc <= 24.9)){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está no peso ideal`
        imagem.src = 'img/normal.png'
    }

    else if((imc > 25) & (imc <= 29.9)){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está acima do peso ideal`
        imagem.src = 'img/sobre.png'
    }

    else if((imc > 30) & (imc <= 34.9)){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está na obesidade I`
        imagem.src = 'img/ob1.png'
    }

    else if((imc > 35) & (imc <= 39.9)){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está na obesidade II`
        imagem.src = 'img/ob2.png'
    }

    else if(imc > 40){
        resultadoDiv.style.display = 'block' 
        mensagem.textContent = `seu imc é: ${imc.toFixed(2)} - você está na obesidade morbida`
        imagem.src = 'img/ob3.png'
    }



}