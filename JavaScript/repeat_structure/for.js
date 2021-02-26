function calculate(val1,val2){
  let numbers= []
  for (let index = val1; index <= val2; index++) {
     numbers.push(index)
  }

  return numbers
}


console.log(calculate(1, 10))


for (let index = 10; index > 0 ; index--) {
   if(index === 5){
     //continue// pula
     break //para
   }

   console.log(index)
  
}