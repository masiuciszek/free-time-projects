class BookList{
    constructor(){

    }

    render(){
        this.element = document.createElement('table');
        this.element.classList = 'u-full-width';
        this.element.innerHTML = (`
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="book-list"></tbody>
        `);

        let booklist = document.getElementById('book-list');
        booklist.addEventListener('click' , (e) => {
            const ui = new UI();
            ui.delete(e.target);
            ui.showalert('the book got removed!');

            e.preventDefault();
        });

        return this.element;
    };

    mount(parent){
        parent.appendChild(this.render());
    }
};