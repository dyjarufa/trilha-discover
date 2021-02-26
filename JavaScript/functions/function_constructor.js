function Person(name) {
  this.bla = name; //this é a referencia a instância criada fora da função
  this.walk = function() {
    return `${this.bla} está andando`
  }
}

const kelly = new Person("Kelly");
const louise = new Person("Louise");

console.log(kelly)
console.log(louise)

console.log(kelly.walk())
console.log(louise.walk())

