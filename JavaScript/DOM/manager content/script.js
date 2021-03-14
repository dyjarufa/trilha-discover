const element = document.querySelector('h1');

element.textContent = 'teste content'
 /* element.textContent += ' Yoh Dev!' */

console.log(element.textContent)
console.log(element.innerText)




/* Manipular Input */

const elementInput = document.querySelector('input');

elementInput.value = "valor que eu quiser" //manipular conteúdo do value do input

console.log(elementInput.value) //mostra o value que está definido no value do input


/* Manipular atributos dos elementos */


const headerID = document.querySelector('header')

headerID.setAttribute('id', 'idheader') //seto um atributo
console.log(headerID)

console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))
console.log(document.querySelector('header').getAttribute('class'))


headerID.removeAttribute('id') //remover um atributo
headerID.removeAttribute('class')

headerID.setAttribute('class', 'bg mb') //consigo definir qualquer tipo de atributo