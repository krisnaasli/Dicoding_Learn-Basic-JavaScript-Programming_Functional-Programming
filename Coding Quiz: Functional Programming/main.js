/**
 * TODO:
 * Create a greatAuthors variable that is an array
 * based on the results of filter() and map() of books:
 * - Use the filter function to return the value of books items
 * that only have sales value more than 1000000.
 * Use the map function on the filtered books,
 * to return a string value with the format:
 * - `${author} is the author of the great book ${title}!'
 *
 * Notes: Do not change the value or structure of books
 */
const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
  // Write the code below
  let greatAuthors = books
  .filter(book => book.sales > 1000000)
  .map(book => `${book.author} is the author of the book ${book.title} greatAuthors!`);
  console.log(greatAuthors);
  