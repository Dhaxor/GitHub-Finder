//Instantiating the github class
const http = new GitHub;
//Instantiating the UI class
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
   
  //Getting the data from the text field 
  const userText = e.target.value;
//chaecking if the input is not empty
  if (userText !== '') {
     http.getNames(userText)
       .then(data => {
         
         if (data.resData.message === 'Not Found') {
           //alert Message
           ui.showAlert("Please check the Name Again", 'alert');
         } else {
            // Alert Message
            ui.showProfile(data.resData);
         }
       
        })
          }
          else{
            //clear the message
                ui.clearMessage();
          }
});

