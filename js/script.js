

const age = prompt('Quanti anni hai?');

console.log(age);

const distance = prompt('Quanti km percorri');

console.log(distance);

let price = distance * 0.21;

console.log(price);

let discount = 0;

if (age < 18){ 
  discount = price * 0.2; 
}
else if (age > 65){
  discount = price * 0.4;
}

price = price - discount;

discount = (Math.round(price * 100) / 100 );

const message = `
  Il prezzo del biglietto e $(discount)
`

document.getElementById('discount').innerHTML = discount;
