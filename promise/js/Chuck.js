class Chuck {
    constructor(){

    }

    getJokes(area){
        fetch(`http://api.icndb.com/jokes/random`)
        .then(res => res.json())
        .then(data => {
            console.log(data.value.joke);
            area.innerHTML = data.value.joke;
        });
    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'wrapper';
        this.element.innerHTML = `
        <div class="chuck">
            <button id="chuck-btn">Get random joke</button>
            <h3 class="chuck-title"></h3>
            <p id="jokes"></p>
        </div>
        `;
        const btn = this.element.querySelector('#chuck-btn');
        btn.addEventListener('click', () => {
            this.getJokes(this.element.querySelector('#jokes'));
        })


        return this.element;
    }
    mount(parent){
        parent.appendChild(this.render());
        this.update();
    }

    update(){

    }
}
