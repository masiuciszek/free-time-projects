const root = document.getElementById('root');



document.addEventListener('DOMContentLoaded', () => {
    let digiClock = new Clock(5,7,'am');
    digiClock.mount(root);
})