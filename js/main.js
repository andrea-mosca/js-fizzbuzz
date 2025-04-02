//----- TRACCIA -----

// Scrivi un programma che stampi i numeri da 1 a 100,
// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero

// SVOLGIMENTO 

// stampa i numeri da 1 a 100
for (i = 1; i <= 100; i++){
    // se il numero è divisibile per 5 e per 3, stampa FizzBuzz 
    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz")
    } 
    // se il numero è divisibile per 5, ma non per 3, stampa Buzz
    else if (i % 5 === 0){
        console.log("Buzz")
    } 
    // se il numero è divisibile per 3, ma non per 5, stampa Fizz
    else if (i % 3 === 0){
        console.log("Fizz")
    }
    // se non è divisibile per 3 o 5, stampa il numero
    else{
        console.log(i)
    }
}