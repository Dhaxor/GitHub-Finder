class UI{

    constructor(){
        this.profile = document.querySelector('.display');
    }


    showProfile(user){
       
        this.profile.innerHTML = `
        
          <div class="card card-body">
          <div class="row">
          <div class="col-md-3">
          <img class="card-img-top" src="${user.avatar_url}">
           </div>
           <div class="col-md-9>
           <h4 style="text-align:center">${user.login}</h4>

                    <div class="card-columns">
                <div class="card bg-warning">
                    <p class="card-text">Username:${user.login}</p>
                </div>


                <div class="card bg-warning">
                    <p class="card-text">Name:${user.name}</p>
                </div>


                <div class="card bg-warning">
                    <p class="card-text">BIO:${user.bio}</p>
                </div>



                <div class="card bg-warning">
                    <p class="card-text">Followers:${user.followers}</p>
                </div>
                
           </div>
          </div>
          
          </div>
        
        
        `
    }

    clearMessage(){
         this.profile.innerHTML = '';

    }


    // showAlert(message,className){
    //     const div = document.createElement('alert');

    //     const newContent = document.createTextNode("You encountered an Error");

    //     div.appendChild('newContent');


    // }
}