const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc() {

    /* Criando variáveis */
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    /* Fazendo comparação lógica */
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'baixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal, Parabéns!!!'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'Ccom obesidade grau III'
        }
        /* enviando o resultado para a <div> com id="resultado" */
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; 
    } else {

        resultado.textContent = "Preencha todos os campos!!!"

    }
}
