// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

const PrimoNumero = parseInt(prompt("inserisci il primo numero"));
const SecondoNumero = parseInt(prompt("inserisci il secondo numero"));

let NumeroPiuGrande;

if (PrimoNumero > SecondoNumero) {
  NumeroPiuGrande = PrimoNumero;
} else if (PrimoNumero < SecondoNumero) {
  NumeroPiuGrande = SecondoNumero;
} else {
  allert("i numeri sono uguali");
}

const NumeroRandom = Math.floor(Math.random() * NumeroPiuGrande);
