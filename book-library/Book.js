class Book{
    constructor(title, author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    render(){
        this.element = document.createElement('form');
        this.element.id = 'book-form';
        this.element.innerHTML = (`

        <h1>Book Library</h1>
          <div>
            <label for="title">Title</label>
            <input type="text" id="title" class="u-full-width">
          </div>
          <div>
            <label for="author">Author</label>
            <input type="text" id="author" class="u-full-width">
          </div>
          <div>
            <label for="isbn">ISBN#</label>
            <input type="text" id="isbn" class="u-full-width">
          </div>
          <div>
            <input type="submit" value="Submit" id="submit-btn" class="u-full-width">
          </div>

        <table class="u-full-width">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="book-list"></tbody>
        </table>

        `);
        this.element.addEventListener('submit', (e) => {

            let titleinput = document.querySelector('#title').value;
            let authorinput = document.querySelector('#author').value;
            let isbninput = document.querySelector('#isbn').value;

            const book = new Book(titleinput, authorinput, isbninput);
            console.log(book)

            const ui = new UI();

            if(titleinput === '' || authorinput === '' || isbninput === '') {
                ui.showalert('please fill in the fields !');
            } else {
                ui.addbook(book)
                ui.showalert('your book got added!!');
                ui.clear();
            }

            e.preventDefault();
        });

        return this.element;
    }



    mount(parent){
        parent.appendChild(this.render());
    }
}