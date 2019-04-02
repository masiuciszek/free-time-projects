// init GitHub class
const github = new Github;
// init UI class
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event litsiners
searchUser.addEventListener('keyup', (e) =>{
    // Get input txt
    const userTxt = e.target.value;

    if(userTxt !== ''){
        //make http call
        github.getUser(userTxt)
            .then(data => {
               if(data.profile.message === 'Not Found'){
                   // show alert
                   ui.showAlert('user not found', 'alert alert-danger')
               } else{
                   // show profile
                   ui.showPofile(data.profile);
                   ui.showRepos(data.repos);
               }
         })
    }  else {
        //clear profile
        // call teh method from the ui class
        ui.clearProfile();
    }
});