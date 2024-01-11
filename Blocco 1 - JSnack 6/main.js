// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.


let insertNumber = prompt("Inserisci un numero:")
let resultHtml = document.getElementById("cubi-numeri")

for (let i = 1; i <= insertNumber; i++) {

    let calcoloCubo = [i] * [i] * [i]

    console.log(calcoloCubo)

    resultHtml.innerHTML += `Cubo: ${calcoloCubo}, `
}


