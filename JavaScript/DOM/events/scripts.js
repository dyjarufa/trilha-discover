function print(){
  console.log('You did! Awesome')
}


/* eventos de teclado */
const input = document.querySelector('input')

// input.onkeyup = function() {
//   console.log('run it')
// }


/* Disparar/adcionado eventos pegando elementos do html */

const h2 = document.querySelector('h2')

h2.addEventListener('click', callMe)

function callMe(){
  console.log('good job!')
}

/* outra forma de usar evento, posso chmar direto no meu elemento */

const h3 = document.querySelector('h3')

h3.onclick = callYou; // chamar o evento de forma direta irá sobrescrever as chamadas anteriores e só será executada a última chamada

function callYou(){
  console.log('hey whats up?!')
}

// h3.addEventListener('click',  callAgain) // aqui empilho as chamadas respeitando a ordem de cada uma
h3.onclick = callAgain; // última chamada foi sobrescrita e somente essa foi executada!!

function callAgain(){
  console.log('dont disturb...')
}


/* Argumento EVENT */

// input.onkeydown = function(event){
//   console.log(event)
// }

input.addEventListener('keyup', showEvent)

function showEvent(event){
  console.log(event.target) //pega toda a tag
  console.log(event.target.value) // pega o valor digitado
}
