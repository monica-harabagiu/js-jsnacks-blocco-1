// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


let names = ["Michelangelo", "Donatello", "Leonardo", "Raffaello"];
let surnames = ["Einstein", "Darwin", "Hawking", "Mendel"];
let guestList = document.getElementById("guest-list")

let randomList = []

for (let i = 0; i < Math.min(names.length, surnames.length); i++) {

    randomList.push(names[i] + " " + surnames[i]);

    console.log("Random Guest List:", randomList);

    guestList.innerHTML += `<li>${randomList[i]}</li>`
}



