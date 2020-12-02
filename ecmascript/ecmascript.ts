//let & const

let seraQuePode = '?';
console.log(seraQuePode);

let estaFRio = true;
if (estaFRio) {
    let acao = 'Colocar casaco';
    console.log(acao);
}

const cpf: string = '190.234.321-32';

console.log(cpf);

let segredo = 'externo';

function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);

// Arrow Function

const somar = (n1: number, n2: number): number => {
    return n1 + n2;
};
console.log(`Somar 2 + 2 = ${somar(2, 2)}`);

const substrair = (n1: number, n2: number): number => n1 - n2;
console.log(`Subtrair 3 - 2 = ${substrair(3, 2)}`);

const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`);
falarCom('João');

// this

function normalComThis(this: any) {
    console.log(this);
}

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();

//this???
console.log(this);
// const arrowComThis = () => {
//     return console.log(this);
// };
// arrowComThis();

// Parâmetro padrão

function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
const numbers = [1.10,99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena',...turmaA];
console.log(turmaB)



function retornaArray(...arg1: number[]):number[] {
    return arg1;
}

const numeros = retornaArray(1,2, 4, 5, 6);
console.log(numeros);
console.log(retornaArray(...numbers))

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a:number, b:string, c:boolean):void{
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]){
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructing (array)

const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0]
// const ano   = caracteristicas[1]; 

const [motor, ano] = caracteristicas;

console.log(motor);
console.log(ano);

// Destructing (objeto)

const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas:{
        w: 'importado'
    }
}

const {nome: n, preco: p, caracteristicas:{w}} = item;
console.log(n);
console.log(p);
console.log(w);


const user: string = 'Daniel';
const notificacoes: string = '8';
const boasVindas = `
Boas vindas ${user},
Notificações: ${ parseInt(notificacoes) > 9 ? '+9': notificacoes}`;

console.log(boasVindas)
console.log(`${(1+1) * 30}`)

//Callback

function espera3s(callback: (dado:string) => void){
    setTimeout(()=>{
        callback('3s depois...')
    },3000);
}

// espera3s((res:string)=>{
//     console.log(res);
// }); 


// function espera3sPromise(){
//     return new Promise((resolve:any)=>{
//         setTimeout(()=>{
//             resolve('3s depois...promise')
//         },3000);
//     });
    
// }

// espera3sPromise()
// .then(dado => console.log(dado));


fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm=> resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log(`Catch!!!:: ${JSON.stringify(err)} `))