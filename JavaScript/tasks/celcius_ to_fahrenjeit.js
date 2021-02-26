//Celsius: C = (F-32) * 5/9
//Fahrenheit: = F * 9/5 + 32


function toCelsius(degree){
  let updateDegree = Number(degree.toUpperCase().replace('F',''))
  let formula = fahrenheit => (fahrenheit - 32) * 5 /9;
  let degreeSign = 'C'

  return formula(updateDegree) + degreeSign;
}

function toFahrenheit(degree){
  let updateDegree = Number(degree.toUpperCase().replace('C',''))
  let formula = celsius => ((celsius * 9) / 5) + 32;
  let degreeSign = 'F'

  return formula(updateDegree) + degreeSign;
}

function transformDegree(degree){
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  //fluxo erro
  if(!celsiusExists && !fahrenheitExists){
    throw new Error('Grau não identificado')
  }

  //fluxo ideal
  if(fahrenheitExists) return toCelsius(degree);

  //fluxo alternativo

  if(celsiusExists) return toFahrenheit(degree)
  
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10C'))

  console.log(transformDegree('60G'))
} catch (error) {
  console.log(error.message)
}