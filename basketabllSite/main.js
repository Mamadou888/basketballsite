
$(".login_page").hide();
var toggleLogin = function() {
    $(".login_page").toggle();
    //then this will toggle it to show and hide
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
       window.location.href = "person_profile.html";

   } else {
       // user is logged out
   }

};

var auth = new FirebaseSimpleLogin(firebase, loginCallback);

var logout = function() {
    auth.logout();
    console.log("You have been logged out !");
    alert("You have just been logged out !");
};

var login = function() {
   console.log("Hello User:");
   var theEmail = $("#theEmail").val();
   console.log(theEmail);
   var thePassword = $("#thePassword").val();
   console.log(thePassword);
   var whole = {email: theEmail, password: thePassword};
   auth.login('password', whole);

};

var sendPasswordResetEmail = function() {
   auth.sendPasswordResetEmail("#email", function(error, success) {
     if (!error) {
       var itsResent="Password reset email sent successfully";
       console.log(itsResent);
       // $("body").append("<p>"+ itsResent + "</p>");
   }
});
};

























