/*
Déclarez les variables suivantes :

La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
La valeur est égal a l'addition des deux précédentes variables */
let maxAmount = Math.max(7, 5, -12, 6, 32, 18, 14, -2);
let minAmount = Math.min(-3, 9, 21, 36, 27, 54, 17, 35);

console.log(maxAmount + minAmount);



/*
Exercice : Aléatoire 1
Faire une variable floatBateau dont la valeur est 10.4
Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut
*/

let floatBateau = 10.4;
let couleBateau = Math.floor();
let voleBateau =Math.ceil();


/*
Exercice : Aléatoire 2
Déclarez les variables suivantes :

La valeur aléatoire entre 50 et 100
La valeur aléatoire peut être seulement 0 ou 1
La valeur aléatoire peut aller de 0 à 10 inclu
*/

function getRandom(max , min) {
  return Math.random() * (max - min) + min;
}

function randNum() {
  return Math.round( Math.random() );
}

function anotherNumber() {
  return Math.round(Math.random() *10) ;
}


/*
Exercice : aléatoire 3
crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
choisir un personnage aléatoirement dans le tableau */

let character = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]

let rand = character[Math.floor(Math.random() * character.length)];

console.log(rand);
