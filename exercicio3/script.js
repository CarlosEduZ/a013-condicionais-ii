//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt("Qual seu nome?")
const idade = Number(prompt("Qual sua idade?"))

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, ",nome)
idade >= 18 ? console.log("pode tirar a carteira de motorista") : console.log("ainda não pode tirar a carteira de motorista")