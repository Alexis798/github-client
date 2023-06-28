const Github = require("./api/github");
const UI = require("./components/ui");
const { client_id, client_secret } = require('./keys/config.json');

const github = new Github(client_id, client_secret);
const ui = new UI();

const useForm = document.getElementById('useForm');

userForm.addEventListener('submit', (e) => {
    
    //el escribir .value permite capturar el valor de la variable input que el usuario ingrese y no toda la etiqueta input
    const textSearch = document.getElementById('textSearch').value;
    if(textSearch !== '') {
        github.fetchUser(textSearch)
        .then( data => {
            if(data.userData.message === 'Not Found'){
                ui.showMessage('User Not Found', 'alert alert-danger mt-2 col-md-12');
            } else {
                ui.showProfile(data.userData);
                ui.showRepositories(data.repositories);
            }  
        })
    }
    e.preventDefault();
});
