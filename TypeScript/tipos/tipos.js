"use strict";
/* O typescript é tipado, ou seja, as variaveis tem tipos (bool, number, string) e elas devem ser respeitadas.
  Não é tão "bem tipado" quando tum c/c++, mas já é algo.
  De maneira geral, o typescript é auto inferente, ou seja, quando você passa um valor para a
  variável, automaticamente ele ve qual o seu tipo, e infere que aquela variável só lidará com aquele tipo
*/
//string
let nome = "joão"; // ou 
let nome2;
console.log(nome);
//numbers
let idade = 28; // ou 
let idade2;
idade = 25.2;
console.log(idade);
//boolean
let possuiHobbies = false; // ou 
let possuiHobbies2;
console.log(possuiHobbies);
//aceitar nulo e/ou outro valor
let altura = 10;
//tipos explícitos
//Tipo dinâmico, igual JS, varia de acordo com a nova atribuição
let minhaIdade; // ou 
let minhaIdade2;
minhaIdade = 28;
console.log(typeof minhaIdade);
minhaIdade = "zé";
console.log(typeof minhaIdade);
minhaIdade = true;
console.log(typeof minhaIdade);
//array
//o array também pode ter tipos definidos
let hobbies = ["Cozinhar", "Praticar"];
console.log(typeof hobbies);
//tupla
//arrays pré definidos (define quantidade, posição e tipo de cada unidade)
let endereco = ["Av Principal", 99];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Marrom"] = 1] = "Marrom";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; //101
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(Cor[100]);
console.log(minhaCor);
//funções
function retornaMuNome() {
    return nome;
}
console.log(retornaMuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
//atribuindo função a variável
const teste = function (a, b) {
    a = a + b;
    return true;
};
console.log(teste(1, 2));
let calculo;
//calculo = digaOi;calculo(); Não pode, pq eu defini a estrutura
calculo = multiplicar;
console.log(calculo(5, 3));
//objetos
let usuario = {
    nome: "joão",
    idade: 28
};
console.log(usuario);
//Exemplo
let funcionario = {
    supervisores: ["Lucas", "Luana"],
    baterPonto: (horas) => {
        if (horas <= 8) {
            return 'Ponto normal';
        }
        return "Ponto Fora do horário";
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(2));
let funcionario2 = {
    supervisores: ["Lucas", "Luana"],
    baterPonto: (horas) => {
        if (horas <= 8) {
            return 'Ponto normal';
        }
        return "Ponto Fora do horário";
    }
};
//union types
let nota = 10;
console.log(nota);
nota = 'Agora sou texto';
console.log(nota);
//Checando tipos
let valor = 10;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log("Não é um number");
}
let contaBancaria = {
    saldo: 2323,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map