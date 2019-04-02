class User {
    constructor(title,btn,api){
        this.title = title;
        this.btn = btn;
        this.api = api;
    }

    getUsers(api,area){
        fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            for(let i in data){
                let print = `
                <div class="user-area">
                    <p>${data[i].name}</p>
                    <p>${data[i].username}</p>
                    <p>${data[i].email}</p>
                    <p>${data[i].address.street}</p>
                    <p>${data[i].address.city}</p>
                </div>
                `;
                area.innerHTML += print;
            };
        });
    }


    render(){
        this.element = document.createElement('div');
        this.element.className = 'users';
        this.element.innerHTML = `
        <div class="container">
            <button id="btn">${this.btn}</button>
            <h3 class="title">${this.title}</h3>
            <p id="output"></p>
        </div>
        `;
        const btn = this.element.querySelector('#btn');
        btn.addEventListener('click', () => {
            this.getUsers(this.api, this.element.querySelector('#output'));
        });
        return this.element;
    }

    mount(parent){
        parent.appendChild(this.render());
        this.update();
    }

    update(){

    }
}