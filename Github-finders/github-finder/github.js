class Github {
    constructor(){
        this.clientId = 'b9d26b8f804e9cb92632';
        this.clientSecret = '81fb603e69a813a514e40ba9b6cc370a245951d3';
        this.reposCount = 5;
        this.reposSort = 'created asc';
    }

    async getUser(user) {
        const profileResponse =  await fetch(`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const repoResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}