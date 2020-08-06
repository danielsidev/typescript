//string
let nome:string;
nome = 'João';
console.log(nome);

//numbers
let idade: number = 27
idade = 27.5

console.log(idade)


//boolean
let possuiHobbies = false;

// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27
console.log(minhaIdade)
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

let hobbies: any[] = ['cozinhar', 'Praticar Esportes'];

console.log(hobbies[0])
console.log(typeof hobbies)

 hobbies = [100, 200, 300];
//  hobbies = 100
 console.log(hobbies)

 // tuplas

 let endereco : [string, number, string]= ["Av Principal", 99, "complemento"];
 console.log(endereco)
 endereco = ["Rua Importante", 1260, "apto 209"];
 console.log(endereco)

 // enums
enum Cor {
    Cinza, // 0
    Verde = 100,// 1
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
} 


let minhaCor: Cor = Cor.Verde

console.log(minhaCor)


console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)


//any
let carro: any = 'BMW'
carro = { marca:'BMW', ano:2019 }
console.log(carro)

// funcões
function retornMeuNome(): string{
    return nome;
    // return minhaIdade;
}

console.log(retornMeuNome())


function digaOi(): void{
    console.log('Oi');
}

digaOi()

function multiplicar(numA:number, numB: number): number {
    return numA * numB;
}

// console.log(multiplicar(2,'Bia'))
console.log(multiplicar(4.7,9));


const test = (a:number, b: number):number => a+b ;

console.log(test(10,100))

// tipo função

let calculo: (numA: number, numB: number) => number;
// calculo = digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5,6));

//objetos
let usuario: {nome: string, idade: number} = {
    nome:'João',
    idade:27
};

console.log(usuario);

usuario = {
    idade:31,
    nome:'Maria'
    
};

console.log(usuario);


// Alias 
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string,    
}


let funcionario: Funcionario = {
    supervisores: ['Ana','Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal';
        }else{
            return 'Fora do horário';
        }
    }
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// Unio Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);


// Checando tipos
let valor =  30;

if(typeof valor === "number"){
    console.log("É um valor number");
}else{
    console.log(typeof valor);
}

// never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome:'Sabão',
    preco: 8,
    validarProduto(){
        if(!this.nome || this.nome.trim().length ==0){
            falha('Precisa ter um nome')
        }
        if(this.preco < 0){
            falha('Preço inválido!')
        }
    }
};

produto.validarProduto();

let altura = 12;

// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;


type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}


const contato1: Contato = {
    nome:'Fulano',
    tel1:'8789798',
    tel2:null    
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

//Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
let contaBancaria:ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['12231321231','7895465421']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)