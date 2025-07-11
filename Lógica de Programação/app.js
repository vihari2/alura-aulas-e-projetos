alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto  = 3;
let chute;
let tentativas = 1;

//loop
//enquanto o chute não for igual ao n.s;
while( chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10')
    if(chute == numeroSecreto) {
        alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
    } else {
        if( chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++; 
    }
}


if (numeroSecreto  == chute) {
    console.log('Parabéns, você acertou o número secreto! ' + numeroSecreto);
     } else {
        alert('Que pena, você errou. o numero secreto é: ' + numeroSecreto + ' O seu chute foi: ' + chute);
        console.log(chute);
}

alert('Boas vindas ao nosso site!')
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let SaldoDisponivel = 1000;
let mensagemdeErro = 'Erro! Preencha todos os campos';
alert('Erro, preencha todos os campos');
alert(mensagemdeErro); 

let nomeFulano = prompt('Qual é seu nome?'); 
let idadeFulano = prompt('Qual é sua idade?'); 

if (idadeFulano >= 18) {
    alert("Parabéns, pode tirar a habilitação")
}  else {
    alert('Não pode tirar a habilitação ainda, você tem apenas ' + idadeFulano + ' anos'); //ou ${idadeFulano}
}

prompt("qual é o dia da semana?")
let resposta = prompt("qual é o dia da semana?");

if (resposta === 'sabado' || resposta === 'domingo') {
alert('Bom fim de semana!'); 
} else {
alert('Boa semana!')
}

let valor = prompt("digite um número "); 
let number = Number(valor); 

if (isNaN(number)) {
    alert('Isso é um número válido') 
} else if (number > 0) {
    alert("o numero é positivo")
} else if (number < 0) {
    alert('Isso é um numero negativo')
} else {
    alert('o número é zero')
}

// Sistema de Pontuação 
let pontuacao = prompt('Qual é a sua pontuação?');

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!')
} else  {
    alert('Tente novamente para ganhar.')
}

let saldo = 4.000;

let mensagem = 'Seu saldo é de ${saldo.toFixed(3)}.'; //Formatar
alert(mensagem);


nome = prompt('Qual é o seu nome?');
alert('Boas Vindas ' + nome);

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador2 = 1;
while(contador2 <= 10) {
    console.log(contador2);
    contador2 = contador2 + 1;
    };

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador3 = 10; 
while (contador3 >= 0) {
    console.log(contador3);
    contador3 = contador3 - 1;
    };


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let num = Number(prompt('Digite um numero; '));
    while(num >= 0) {
    console.log(num);
    num--;
    };

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let limite = Number(prompt('Digite um numero: '));
let contador = 0;
    while(contador <= limite) {
    console.log(contador);
    contador++; 
    };


// Operadores de comparação em JavaScript
// = declaração de variáveis
// == comparação de valores
// === comparação de valores e tipos
// != comparação de valores, mas não tipos
// !== comparação de valores e tipos    
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a
// && operador lógico E
// || operador lógico OU
// ! operador lógico NÃO   