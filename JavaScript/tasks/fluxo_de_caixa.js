
const familyExpense = { 
  incomes: [1200, 1200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 4450.00]
}

function sum(array){
  let total = 0;

  for(value of array){
    total += value;
  }

  return total;
}

function calculateBalance(){
  const calculateIncomes = sum(familyExpense.incomes)
  const calculateExpenses = sum(familyExpense.expenses)

  let total = calculateIncomes - calculateExpenses

  let balanceStatus = 'negativo';

  if(total >= 0){
    balanceStatus = 'positivo'
  }

  return `Seu saldo é ${balanceStatus}: R$${total.toFixed(2)}`
}

console.log(calculateBalance())