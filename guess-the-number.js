// Overime si, ci sa subor nacital
console.log('Subor guess-the-number.js sa nacital');

// Vygenerujeme nahodne cislo od 0 - 100

// Math.random() vygeneruje cislo od 0 - 1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let randomNumber = Math.random();
console.log('randomNumber:', randomNumber);

// Z `randomNumber` vytvorime `secretNumber` ktory bude spadat do pozadovaneho intervalu 
// Vzorec ```Math.floor(Math.random() * (max - min + 1)) + min;````
let secretNumber = Math.floor(randomNumber * 101);
console.log('secretNumber:', secretNumber);

// Privitame hraca a spytame sa ho na jeho prvy tip
let guess = prompt('Vitaj!, Hadaj na ake cislo myslim!?');
// Nezabudnime transformovat tip na cislo
let guessedNumber = parseInt(guess);

let attempts = 1;

// Vytvorime cyklus ktory sa bude uzivatela pytat na tip kym neuhadne
while (guess !== secretNumber) {
    console.log(attempts + '. tip: '+ guess);

    let msg;
    // Zistime ci odhad bol vacsi / mensi ako nahodne cislo
    if (secretNumber < guess) {
        msg = 'Myslim na mensie cislo';
    }
    if (secretNumber > guess) {
        msg = 'Myslim na vacsie cislo';
    }

    // Znova sa opytame hraca na jeho tip
    guess = parseInt(prompt(msg));
    // Pripocitame dalsi pokus
    attempts++;
}

// Hru ukoncime s pogratulovanim
alert('Spravne!!! podarilo sa ti to uhadnut na ' + attempts + '. pokus');