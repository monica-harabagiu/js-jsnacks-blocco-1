// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


let sommaHtml = document.getElementById("somma-numeri")
let somma = 0

for (let i = 0; i < 10; i++) {

    let insertNumber = prompt("Inserisci un numero:");
    let numero = parseFloat(insertNumber)

    somma += numero

    sommaHtml.innerHTML = `La somma è ${somma}`
}

