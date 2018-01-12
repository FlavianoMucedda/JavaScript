let bodyElement = document.querySelector('body');

bodyElement.classList.replace('bg-aqua' , 'bg-olive');

let firstParagraph = document.querySelector('#first-paragraph');
let clsFirstParagraph = ['bg-lime' , 'gray'];

firstParagraph.classList.remove(...clsFirstParagraph);
firstParagraph.classList.add('aqua');

let bgSilver = document.querySelectorAll('.bg-silver');
  bgSilver.forEach(function(item) {
  item.classList.replace('bg-silver' , 'bg-teal');
})


let clsBlockQuote = document.querySelector('blockquote');
clsBlockQuote.classList.add('bg-white');
