class Clock {
    constructor(hours, min, period) {
        this.hours = hours;
        this.min = min;
        this.period = period;
    }

    clockVal(){

    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'clock';
        this.element.innerHTML = `
        <div class="control">
         <button id="btn-hours-up" class="digit-btn">+</button>
         <div id="digits-hours" class="digits hours">${this.hours}</div>
         <button id="btn-hours-down" class="digit-btn">-</button>
         </div>
         <div class="separator">:</div>
         <div class="control">
         <button id="btn-minutes-up" class="digit-btn">+</button>
         <div id="digits-minutes" class="digits minutes">${this.min}</div>
         <button id="btn-minutes-down" class="digit-btn">-</button>
         </div>
        <div id="period" class="period">${this.period}</div>
        `;
        let btnHoursUp = this.element.querySelector('#btn-hours-up');
        btnHoursUp.addEventListener('click', () => {
            if(this.hours < 12) {
                this.hours++;
                this.period = 'am';
            } else {
                this.hours = 1;
            }
            this.update();
        })
        this.element.querySelector('#btn-hours-down').addEventListener('click', () => {
            if(this.hours > 1){
                this.hours--;
                this.period = 'pm';
            } else {
                this.hours = 12;
            }
            this.update();
        })
        this.element.querySelector('#btn-minutes-up').addEventListener('click', () => {
            if(this.min < 59 ) {
                this.min++;
            } else {
                this.min = 1;
            }
            this.update();
        })
        this.element.querySelector('#btn-minutes-down').addEventListener('click', () => {
            if(this.min > 1 ) {
                this.min--;
            } else {
                this.min = 59;
            }
            this.update();
        })
        return this.element;
    }

    mount(parent){
        parent.appendChild(this.render());
        return this.update()
    }

    update(){
        let hoursDigits = this.element.querySelector('#digits-hours');
        let minutesDigits = this.element.querySelector('#digits-minutes');
        let periodElm = this.element.querySelector('#period');

        hoursDigits.innerHTML = this.hours;
        minutesDigits.innerHTML = this.min;
        periodElm.innerHTML = this.period;
    }
}