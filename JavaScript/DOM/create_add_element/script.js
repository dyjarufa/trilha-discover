// criar e adcionar elementos

const div = document.createElement('div');
div.innerHTML = 'Hello devs!'

const header = document.querySelector('header');
//  header.append(div) // apend adciono após
header.prepend(div) // preprend adciono antes



/* Adcionar entre os elementos */
const body = document.querySelector('body')
const script = body.querySelector('script')
// body.insertBefore(div, script) // recebe dois argumentos (1o é o elemento novo, 2o o elemento de referentecia)

/* simular um insertAfter */
const header2 = document.querySelector('header')
console.log(header2.nextElementSibling)
body.insertBefore(div, header2.nextElementSibling) // insertAfter (insiro um elemento antes do próximo elemento do header) nextElementSibling
