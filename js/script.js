const numGen = [];
let numUser = parseInt(prompt("inserisci un numero: "));

let somma = 0
while(somma < 50) {
    let numUser = parseInt(prompt("inserisci un numero: "));
    if (!NaN(numUser)){
        somma += numUser;
        numGen.push(numUser);
    }
}

