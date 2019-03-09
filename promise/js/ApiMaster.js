class ApiMaster {
    constructor(title,btn,api){
        this.title = title;
        this.btn = btn;
        this.api = api;
    }

    getApi(api,area){
        fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data.value.joke);
            area.innerHTML = data.value.joke;
        }).catch(err=>{
            console.error(err);
        });
    }


    render(){
        this.element = document.createElement('div');
        this.element.className = 'wrapper';
        this.element.innerHTML = `
        <div class="container">
            <button id="btn">${this.btn}</button>
            <h3 class="title">${this.title}</h3>
            <p id="output"></p>
        </div>
        `;
        const btn = this.element.querySelector('#btn');
        btn.addEventListener('click', () => {
            this.getApi(this.api,this.element.querySelector('#output'));
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
