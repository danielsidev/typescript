"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const niver = new Data(3, 11, 1991);
niver.dia = 4;
console.log(niver.dia);
console.log(niver);
const casamento = new Data; // posso omitir os parenteses
console.log(casamento);
/*************************************** */
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const niversario = new DataEsperta(3, 11, 1991);
niver.dia = 4;
console.log(niversario.dia);
console.log(niversario);
const casamentos = new DataEsperta; // posso omitir os parenteses
console.log(casamentos);
/********************************************************************/
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        return this.preco - (this.desconto * 100);
    }
}
const prod1 = new Produto('Bicileta', 200);
prod1.desconto = 0.06;
console.log(prod1.resumo());
console.log(prod1.precoComDesconto());
const prod2 = new Produto('Carro', 30000, 0.2);
console.log(prod2.resumo());
console.log(prod2.precoComDesconto());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
// const carro1 = new Carro('Ford', 'Ka', 185)
// Array(50).fill(0).forEach(()=> carro1.acelerar())
// console.log(carro1.acelerar())
// Array(40).fill(0).forEach(()=> carro1.frear())
// console.log(carro1.frear())
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    //override
    acelerar() {
        return this.alterarVelocidade(20);
    }
    //override
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
// const pessoa1 = new Pessoa
const pessoa1 = {
    _idade: 0,
    get idade() {
        return this._idade;
    },
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
};
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = 3;
console.log(pessoa1.idade);
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
// Classe Abstrata // Não pode ser instanciada, deve ser estendida(herança), pode conter apenas a assinatura de métodos
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//Construtor Privado & Singleton // controlar a quantidade de instacias da classe
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//Somente Leitura // setar uma única vez
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
console.log(turboHelice);
//# sourceMappingURL=classes.js.map