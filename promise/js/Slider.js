
class Slider {
    constructor(value,colour){
        this.value = value;
        this.colour = colour;
    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'slider';
        this.element.innerHTML =
        `
        <div class="scale">
            <div class="bar"></div>
            <div class="knob"></div>
        </div>
        <div class="value">X</div>
        `
        return this.element;
    }

    mount(parent){
        parent.appendChild(this.render());
        this.update();
    }

    update(){

    }
}

