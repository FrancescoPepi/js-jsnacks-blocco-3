// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

const PrimoNumero = parseInt(prompt("inserisci il primo numero"));
const SecondoNumero = parseInt(prompt("inserisci il secondo numero"));

let NumeroPiuGrande;
let NumeroPiuPiccolo;

if (PrimoNumero > SecondoNumero) {
  NumeroPiuGrande = PrimoNumero;
  NumeroPiuPiccolo = SecondoNumero;
} else if (PrimoNumero < SecondoNumero) {
  NumeroPiuGrande = SecondoNumero;
  NumeroPiuPiccolo = PrimoNumero;
} else {
  alert("i numeri sono uguali");
}
// random
const NumeroRandom =
  Math.floor(Math.random() * NumeroPiuGrande) + NumeroPiuPiccolo;

if (isNaN(NumeroRandom)) {
  alert("Riprova");
} else {
  alert("Ecco il numero: " + NumeroRandom);
}
