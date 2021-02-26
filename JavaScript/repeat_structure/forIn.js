//Loop em um objeto. 
//Para pegar um propriedade do objeto

let person = {
  name: 'Ben',
  age: 3,
  weight: 13.5
}

for(let prop in person){
  console.log(prop)
  console.log(person["name"])
  console.log(person[prop])
  console.log(person.weight)
}
