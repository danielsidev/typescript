function echo(objeto: any){
    return objeto
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({nome:'João', idade:27}));


//Usando Generics
function echoMelhorado<T>(objeto: T): T{
    return objeto
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({nome:'João Silva', idade:27}).nome);

//Generics disponíveis na API

const avaliacoes: Array<number>= [10,9.3, 7,7]
avaliacoes.push(8.4)
avaliacoes.push(5.5)
console.log(avaliacoes);

//Array 
function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir<number>([1,2,3])
imprimir<string>(['Ana', 'Bia', "Carlos"])

type Aluno = {nome: string, idade: number} 
imprimir<Aluno>([
    {nome:'Fulano', idade:22},
    {nome:'Cicrano', idade:23},
    {nome:'Beltrano', idade:24},
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'));

//Class com Generics

abstract class OperacaoBinaria <T, R>{
    constructor(public operando1: T, public operando2: T){

    }

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom', 'dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'Opa').executar());


class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number{
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3,4).executar());
console.log(new SomaBinaria(30,434).executar());


