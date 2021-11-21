const book = {
  title: 'ego',
  author: 'Ryan',
  publisher: {
    name: 'Penduim'
  }
}

const { name: publisherName = 'Self-published'} = book.publisher
console.log(publisherName);

const [coffeName, sCoffeCost] = item