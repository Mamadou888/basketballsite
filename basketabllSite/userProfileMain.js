var logout = function() {
    auth.logout();
    console.log("You have been logged out !");
    window.location.href = "index.html";
};


var firebase = new Firebase("https://basketballsite.firebaseio.com");

var loginCallback = function(error, user) {
    

    if (error) {
       // an error occurred while attempting login
       console.log(error);
       alert(error);
   } else if (user) {
       // user authenticated with Firebase
       console.log("User ID: " + user.uid + " - " + user.email + ", Provider: " + user.provider);
       $("#username").text("Welcome User " + user.email);

   } else {
       // user is logged out
   }

};

var auth = new FirebaseSimpleLogin(firebase, loginCallback);

var gotonextpage = function() {
  window.location.href="myGameBook.html";
};
