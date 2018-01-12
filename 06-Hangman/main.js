let letterToFind = ["b","o","n","j","o","u","r"];
let letterInput = ["","","","","","",""];
let guessLetter = function(){
  while (letterInput.toString() !== letterToFind.toString()) {
    let letters = windows.prompt("Enter a letter").toUpperCase();
    if (wrong.includes(letters)) === false) {
      wrong.push(letters);
      for (let i = 0; i < array.length; i++) {
        if (letters === letterToFind[i]) {
          letterInput[i] === letters;
          }
        }
        if (letterInput.includes(letters) !== true) {
          failed++;
          console.log()
        }
      }
    }
}
