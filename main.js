// // Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

// const primoNumero = parseInt(prompt("inserisci il primo numero"));
// const secondoNumero = parseInt(prompt("inserisci il secondo numero"));

// let numeroPiuGrande;
// let numeroPiuPiccolo;

// // calcolo del più grande
// if (primoNumero > secondoNumero) {
//   numeroPiuGrande = primoNumero;
//   numeroPiuPiccolo = secondoNumero;
// } else if (primoNumero < secondoNumero) {
//   numeroPiuGrande = secondoNumero;
//   numeroPiuPiccolo = primoNumero;
// } else {
//   alert("i numeri sono uguali");
// }
// // random
// const numeroRandom =
//   Math.floor(Math.random() * (numeroPiuGrande - numeroPiuPiccolo)) +
//   numeroPiuPiccolo;

// //   stampa
// if (isNaN(numeroRandom)) {
//   alert("Riprova");
// } else {
//   alert("Ecco il numero: " + numeroRandom);
// }

// es 2

// const primaParola = prompt("inserisci la prima parola");
// const secondaParola = prompt("inserisci la seconda parola");

// if (primaParola.length == secondaParola.length) {
//   alert(primaParola + " " + secondaParola);
// } else if (primaParola.length < secondaParola.length) {
//   alert(secondaParola);
// } else {
//   alert(primaParola);
// }

// ES 3

const container = [];

numero = 0;

do {
  const numeroTemporaneo = parseInt(prompt("inserisci un numero"));
  container.push(numeroTemporaneo);
  numero += numeroTemporaneo;
} while (numero < 50);
{
  const numeroTemporaneo = parseInt(prompt("inserisci un numero"));
  container.push(numeroTemporaneo);
  numero += numeroTemporaneo;
}

console.log(numero);
console.log(container);
