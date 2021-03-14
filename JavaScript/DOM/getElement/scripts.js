//getElementById()

// const element = document.getElementById('blog-title');

// console.log(element)

const classElement = document.getElementsByClassName('one')

console.log(classElement);

const query = document.querySelectorAll('one')

query.forEach(e => {
  console.log(e)
})