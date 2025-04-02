//----- TRACCIA -----

// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero

// SVOLGIMENTO 

// stampa i numeri da 1 a 100
for (i = 1; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0){// se il numero è divisibile per 5 e per 3, stampa FizzBuzz
        console.log("FizzBuzz");
    } else if (i % 5 === 0){ // se il numero è divisibile per 5, ma non per 3, stampa Buzz
        console.log("Buzz");
    } else if (i % 3 === 0){// se il numero è divisibile per 3, ma non per 5, stampa Fizz
        console.log("Fizz");
    } else{// se non è divisibile per 3 o 5, stampa il numero
        console.log(i);
    }
}

for (i = 1; i <= 100; i++){
    console.log( (i %3 ? "" : "Fizz") +(i % 5 ? "" : "Buzz") || i);
}