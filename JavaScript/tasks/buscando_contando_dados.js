const booksByCategory = [
  {
    category: 'Riquesa',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O Poder do hábito',
        author: 'Charles Duhigg'
      },
      {
        title: 'Pai Rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lecthter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: '7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length
console.log(totalCategories)

for (category of booksByCategory) {
  console.log(`Total de livros da categoria ${category.category}`)
  console.log(category.books.length)
}

function countAuthors(){
  let authors = [];

  for(category of booksByCategory){
    for(book of category.books){
      if(authors.indexOf(book.author) == -1){ // -1 informa que o autor não foi encontrado
        authors.push(book.author)
      }
    }
  }

  return authors.length;
}

function booksOfAugusto(){
  let books = []

  for(let category of booksByCategory){
    for(let book of category.books){
      if(book.author === 'Augusto Cury'){
        books.push(book.title)
      }
    }
  }

  return "Livos do author: " + books.join(", ")
}

function booksOfAuthor(author){
  let books = []

  for(let category of booksByCategory){
    for(let book of category.books){
      if(book.author === author){
        books.push(book.title)
      }
    }
  }

  return `Livros do autor ${author}: ${books.join(", ")} `
}

console.log(countAuthors())

console.log(booksOfAugusto())

console.log(booksOfAuthor('Charles Duhigg'))