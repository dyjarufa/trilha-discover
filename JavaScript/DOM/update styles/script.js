//Insere CSS em linha na tag selecionada
/* const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3d2"

console.log(element.style)
console.log(element.style.backgroundColor) */



/* Usando o classList */

const elementClassList = document.querySelector('body')

elementClassList.classList.add('active', 'green')
console.log(elementClassList.classList)
elementClassList.classList.remove('active')
elementClassList.classList.toggle('active')
