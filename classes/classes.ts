class Data {
    // Público por padrão
    dia: number 
    public mes: number
    ano: number
    
    constructor(dia:number = 1, mes:number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

}
const niver = new Data(3,11,1991);
niver.dia = 4;
console.log(niver.dia);
console.log(niver);

const casamento = new Data // posso omitir os parenteses
console.log(casamento)

/*************************************** */


class DataEsperta {

    constructor(public dia:number = 1, public mes:number = 1, public ano: number = 1970){
    }

}
const niversario = new DataEsperta(3,11,1991);
niver.dia = 4;
console.log(niversario.dia);
console.log(niversario);

const casamentos = new DataEsperta // posso omitir os parenteses
console.log(casamentos)

/********************************************************************/

class Produto {
    constructor(public nome: string , public preco: number, public desconto:number = 0) {}

    public resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }


    public precoComDesconto(): number{
        return this.preco  - ( this.desconto * 100)
    }

}

const prod1 = new Produto('Bicileta', 200)
prod1.desconto = 0.06
console.log(prod1.resumo());
console.log(prod1.precoComDesconto());



const prod2 = new Produto('Carro', 30000, 0.2)

console.log(prod2.resumo());
console.log(prod2.precoComDesconto());

class Carro {
    private velocidadeAtual : number = 0;

    constructor(public marca: string, public modelo:string, 
        private velocidadeMaxima: number = 200){
    }

    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade>=0 && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual;
    }

    public acelerar(): number{
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}
// const carro1 = new Carro('Ford', 'Ka', 185)
// Array(50).fill(0).forEach(()=> carro1.acelerar())
// console.log(carro1.acelerar())

// Array(40).fill(0).forEach(()=> carro1.frear())
// console.log(carro1.frear())

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    //override
    public acelerar(): number{
        return this.alterarVelocidade(20);
    }
    //override
    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 =  new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())

// Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number){
        if(valor >=0 && valor <=120){
            this._idade = valor
        }
    }
}
// const pessoa1 = new Pessoa
const pessoa1 =  {
    _idade : 0,
    get idade(){
        return this._idade
    },
    set idade(valor){
        if(valor >=0 && valor <=120){
            this._idade = valor
        }
    }
}
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = 3
console.log(pessoa1.idade);

//Atributos e métodos estáticos

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// Classe Abstrata // Não pode ser instanciada, deve ser estendida(herança), pode conter apenas a assinatura de métodos
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]):void 

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo{
    executar(...numeros: number[]):void{
        this.resultado = numeros.reduce((t,a) => t + a)
    }
}

class Multiplicacao extends Calculo{
    executar(...numeros: number[]):void{
        this.resultado = numeros.reduce((t,a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado());



c1 = new Multiplicacao()
c1.executar(2,3,4,5)
console.log(c1.getResultado());

//Construtor Privado & Singleton // controlar a quantidade de instacias da classe
class Unico {
    private static instance: Unico = new Unico
    private constructor(){}

    static getInstance(): Unico{
        return Unico.instance
    }

    agora(){
        return new Date
    }
}

console.log(Unico.getInstance().agora());


//Somente Leitura // setar uma única vez
class Aviao {
    public readonly modelo: string
    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
console.log(turboHelice);


