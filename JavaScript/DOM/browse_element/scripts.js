// Nevegar opelos elementos
// parentNode or parentElement

const element = document.querySelector('h1')
console.log(element.parentElement) //pego o primeiro elemento pai

/* -- */

// Pegar Elementos Filhos
// childNodes or children

const elementChild = document.querySelector('body')
console.log(elementChild.children) //retorna a listas de elmentos filho que podem ser iterados

const iterate = elementChild.children;

Array.from(iterate).forEach((e, index) => {
  console.log(`${index} ${e}`)
})

// Pegar o primiero e ultimo elemento Filho
// firstChild or lastChild

console.log(elementChild.firstChild)
console.log(elementChild.lastChild)



/* Pegar elementos irmãos */

// nextSibling or nextElementSibling
console.log('elemento irmão')
const brotherElement = document.querySelector('header');
console.log(brotherElement.nextElementSibling)


// previousSibling or previousElementSibling
const brotherElement2 = document.querySelector('h1');
console.log(brotherElement2.previousElementSibling)