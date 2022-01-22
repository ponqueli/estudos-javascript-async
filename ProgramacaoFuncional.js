function menu(){

    function esconderMenu(){

    }
    esconderMenu()
}

const a = 3
const multiplicar = function(a,b){ //função anônima 
    return a * b
}

const operacoes = [
    function(a,b){
        return a + b
    },
    function(a,b){
        return a - b
    },
    function(a,b){
        return a * b
    },
    function(a,b){
        return a / b
    }
]

const subtracao = operacoes[1];

console.log(operacoes[0](5,6))
console.log(subtracao(5,6))
console.log(operacoes[2](5,6))
console.log(operacoes[3](5,6))


function executarNoConsole(fn, num1, num2){
   if(typeof fn === "function"){
       console.log(fn(num1,num2))
   }else{
       console.log("Erro")
   }
}

const somar = ((a,b)=> { return a + b })
executarNoConsole( somar, 8,9)
executarNoConsole( 66.77,2, 88 )

//RJ versao 1
function precoComImposto(imposto,preco){
    return preco * (1 + imposto)
}

//RJ versao 1
console.log(precoComImposto(0.11, 12.78))
console.log(precoComImposto(0.11, 34))
console.log(precoComImposto(0.11, 22.45))

//versao 2
function precoComImposto2(imposto){
    function calcular(preco){
        return preco * (1 + imposto)
    }
    return calcular
}
//vira a funcao calcular ali de cima
const precoComImposto2RJ = precoComImposto2(0.11)
const precoComImposto2SP = precoComImposto2(0.15)
const precoComImposto2PR = precoComImposto2(0.30)

console.log(precoComImposto2RJ( 12.78 ))
console.log(precoComImposto2SP( 34 ))
console.log(precoComImposto2PR( 22.45 ))


