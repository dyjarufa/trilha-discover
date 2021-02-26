function sayMayName(name) {
  console.log('Antes de executar uma função callback')

  name() //chamo a callback passada pelo parâmetro

  console.log('depois de executar uma função callback')
}


sayMayName(
  //aqui é uma callback
  () => {
    console.log('Estou em uma função callback')
  }
)