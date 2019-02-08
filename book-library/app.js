const container = document.querySelector('.container');
const bookForm = document.querySelector('#book-form');
let startLibrary = new Book('','','');
let booklist = new BookList();
startLibrary.mount(container);
booklist.render(container);

