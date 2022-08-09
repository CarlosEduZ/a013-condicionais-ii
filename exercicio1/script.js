let numero = Number(prompt("Digite um número"))
if(numero %2 === 0){
    if(numero %3 === 0){
        console.log("O número é divisivel por 2 e 3")
    }else{
        console.log("O número não é divisivel por 3")
    }
}else{
    console.log("o número não é divisivel por 2")
}

//operador lógico

if(numero%2 === 0 && numero%3 ===0){
    console.log("O número é dividido por 2 e 3")
}else{
    console.log("O número não é divisivel por 2 e 3")}
