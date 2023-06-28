class UI {
    constructor() {
       this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user)
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft" style="background-color: #EAEBED">
                <img src="${user.avatar_url}" class="card-img-top rounded"/>
                <div class="card-body">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8">
                            <h4 class="card-title text-dark">${user.name} / ${user.login}</h4>
                        </div>
                        <div class="col-md-2">
                            <a href="${user.html_url}" class="btn btn-block text-light" target="_blank" style="background-color: #6E5DCF">Profile</a>
                        </div>
                    </div>
                    <br />
                    <span class="badge bg-success">Followers: ${user.followers}</span>
                    <span class="badge bg-primary">Following: ${user.following}</span>
                    <span class="badge bg-info text-dark">Company: ${user.company}</span>
                    <span class="badge bg-dark text-light">Blog: ${user.blog}</span>
                    <span class="badge bg-secondary text-light">Public Repos: ${user.public_repos}</span>
                </div>
            </div>
        `;
        this.clearMessage();
    }

    showMessage( message, cssClass ) {
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);

    }

    clearMessage() {
        const alertFound = document.querySelector('.alert');
        if(alertFound) {
            alertFound.remove();
        }
    }

    showRepositories(repositories) {
        let template = '';
        repositories.forEach(repo => {
            console.log(repo);
            template += `
                <div class="card mt-2 animated bounceInUp" style="background-color: #EAEBED">
                    <div class="card-body col">
                        <div class="col-md-6 mb-2">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="text-dark">${repo.description}</p>
                            </div>
                            <div class="col-md-6">
                                <span class="badge text-light" style="background-color: #243B67">Languages: ${repo.language}</span>
                                <span class="badge text-light" style="background-color: #C27DFC">Sizes: ${repo.size} KB</span>
                                <span class="badge text-light" style="background-color: #6E5DCF">License: ${repo.license}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        });    
            
        document.getElementById('repositories').innerHTML = template;

    }
}

module.exports = UI;