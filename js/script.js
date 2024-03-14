// const numGen = [];

// let somma = 0
// while(somma < 50) {
//     let numUser = parseInt(prompt("inserisci un numero: "));
//     if (!NaN(numUser)){
//         somma += numUser;
//         numGen.push(numUser);
//     }
// }

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


 const arrayNumb = parseInt(prompt("Inserisci il numero di array da generare: "));
const arrayGen = [];

function casualArrGen(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(getRandomInteger(0, 10));
    }
    return array;
}

  for(let i = 0; i < arrayNumb; i++){
    arrayGen.push(casualArrGen(10));
  }
console.log(arrayGen)

  
  
 
  
  