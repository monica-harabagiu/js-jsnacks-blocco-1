// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let numbers = []
let listaNumeriHtml = document.getElementById("lista-numeri")
let sommaDispariHtml = document.getElementById("somma-dispari")
let sommaDispari = 0


function creaLista() {

    for (let i = 0; i <= 100; i++) {

        const element = `<li>${i}</i>`

        numbers.push(element)

        if ((i % 2) !== 0) {
            sommaDispari += i
        }
    }

    console.log(numbers)
    listaNumeriHtml.innerHTML = numbers.join('')


    console.log(sommaDispari)
    sommaDispariHtml.innerHTML = `la somma dei numeri dispari è: ${sommaDispari}`

}

listaNumeriHtml.addEventListener("load", creaLista())

