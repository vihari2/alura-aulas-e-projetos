alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto  = parseInt(Math.random() * numeroMaximo + 1); //parseInt(Math.random() * 100 + 1) garante que sempre teremos um número inteiro entre 1 e 100 (inclusive).
let chute;
let tentativas = 1;

//loop
//enquanto o chute não for igual ao n.s;
while( chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if(chute == numeroSecreto) {
        break;   
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
let palavraTentativa = tentativas > 1 ? 'tentativas'  : 'tentativa' //operador ternário
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// if(tentativas > 1) {
//     alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
// } else {
//     alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`)
// }


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

// AND (&&)
// O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e avaliar se ambas são verdadeiras. 
// Se ambas as condições forem verdadeiras, o resultado será… verdadeiro. Caso contrário, logicamente será falso. Por exemplo:

    let idadee = 25;
    let possuiCarteira = true;

    // se idade é maior que 18 e possui carteira…
    if (idadee > 18 && possuiCarteira) {
    console.log("Pode dirigir!");
    } else {
    console.log("Não pode dirigir.");
    }


// OR (||)
// O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma das condições é verdadeira. 
// Se uma das condições for verdadeira, o resultado será verdadeiro. Se ambas forem falsas, o resultado será falso. Veja um exemplo:

    let temMaça = false;
    let temBanana = true;

    // se tem maça ou tem banana…
    if (temMaça || temBanana) {
    console.log("Você tem frutas!");
    } else {
    console.log("Não tem frutas.");
    }



//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
 console.log('boas vindas');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nomeeee = vitoria;
console.log(`Olá, ${nomeeee}!`); 

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomeeeeee = vitoria;
alert(`Olá, ${nomeeeeee}!`); 

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let resposta2 = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta2);


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 33; 
let valor2 = 76;
let resultado = valor1 + valor2; 
console.log(`A soma de ${valor1} e ${valor2}é igual a ${resultado}`);


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valora = 33; 
let valorb = 76;
let resultadoo = valora - valorb; 
console.log(`A diferença de ${valora} e ${valorb} é igual a ${resultadoo}`);


// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeee = prompt('insira sua idade:  ');
let idadedapessoa = parseInt(idadeee) >= 18 ? 'maior de idade' : 'menor de idade';
console.log(idadedapessoa);

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let valorr = prompt('Digite um valor ');
let numero = parseFloat(valor);
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let i = 1;
while(i <= 10) {
console.log(i) ////O correto é imprimir primeiro e depois incrementar.
i++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 40;
let resultado6 = nota >= 70 ? 'Aprovado' : 'Reprovado';
console.log(resultado6);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroaleatorio = Math.random();
console.log(numeroaleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroaleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroaleatorio2);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroaleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroaleatorio3);