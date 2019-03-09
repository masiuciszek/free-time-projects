
document.addEventListener('DOMContentLoaded',() => {
    const chuckJokes = new ApiMaster('Chuck Norris joke', 'Get random joke','http://api.icndb.com/jokes/random');
    const users = new User('Users', 'Get Users', 'https://jsonplaceholder.typicode.com/users');

    chuckJokes.mount(document.getElementById('root'));
    users.mount(document.getElementById('root'));
})