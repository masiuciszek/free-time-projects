class UI {

    addbook(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
    }

    showalert(msg, className){
      let div = document.createElement('div');
      div.className = `alert${className}`;
      div.appendChild(document.createTextNode(msg));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);

      setTimeout(() => {
          document.querySelector('.alert').remove();
      },3000);

    }

    delete(target){
      if(target.className === 'delete') {
          target.parentElement.parentElement.remove();
      }
    }

    clear(){
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';

    }
}