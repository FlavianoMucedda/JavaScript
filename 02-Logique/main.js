let language = "It";
let message;

switch (language) {
  case "Fr":
    message = "bonjour tout le monde";
  break;
  case "Nl":
    message = "Goeiedag iedereen";
  break;
  case "It":
    message = "Ciao a tutti";
  break;
  default: message = "I don't recognize this language";

}

console.log(message);
