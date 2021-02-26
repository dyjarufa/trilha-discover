console.log(
  [
    "a",
    { type: "array" },
    function () {
      return " sou um array!"
    }
  ][2]()// chamei a função de dentro do array e executei
) 

let techs = ['html', 'css', 'js']

// Adcionar um item no fim do Array
console.log(techs.push('nodejs'))

// Adcionar do começo
console.log(techs.unshift('sql'))

// remover do fim
console.log(techs.pop())

// remover do começo
console.log(techs.shift())

// pegar somente alguns elementos do array
// console.log(techs.slice(2, 3))

// remover 1 ou mais items em qualquer posição do array
//console.log(techs.splice(0,2))

// encontrar a posição de um elemento no array
 let index = techs.indexOf('css')
 techs.splice(index, 1)

console.log(techs)