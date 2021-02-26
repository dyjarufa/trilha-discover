function sayMyName(name = ''){

  if(name === ''){
    //throw 'name is required';
    throw new Error('Name is needed')
  }

  console.log('after error')
}

try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log('Go ahead')