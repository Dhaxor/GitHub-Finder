class GitHub{

constructor(){
    this.client_id = '2337e0dad45a65e1df43';
    this.client_secret = 'cccd6eab70d5735ec404c8c92a8fe987f70ef91c';
}

async getNames(user){
const responseProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const resData = await responseProfile.json();

    return{
        resData
    }
}





    // async getText(){
    //   const response = await  fetch(url);
      
    //   const resData = await res.json();
    
    //   return resData;
    
    // }
    }