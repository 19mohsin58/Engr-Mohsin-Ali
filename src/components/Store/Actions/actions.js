import firebase from '../../Firebase/firebase';





const facebook_login = () =>{
    
       return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
  .auth().signInWithPopup(provider).then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;

    let appUser = {
        name : user.displayName,
        email : user.email,
        uid : user.uid,
        photto : user.photoURL
    }


    dispatch({type : 'SETUSER' , payload : appUser})

  })

  
  .catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage)
    // ...
  });
       }



    
}



export  {facebook_login}