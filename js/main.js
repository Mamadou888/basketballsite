$(document).ready(function() {

  $(".login_page").hide();
  $("#toggleLogin").click (  function() {
    $(".login_page").toggle();
    //then this will toggle it to show and hide
  }); 

  var ref = new Firebase("https://mygamebook.firebaseio.com");

  var auth = new FirebaseSimpleLogin(ref, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
      alert(error);
    } else if (user) {
      // user authenticated with Firebase
      console.log("User ID: " + user.uid + ", Provider: " + user.provider);
      window.location.href = "personProfile.html";

    } else {
      // user is logged out
    }
  });

  $("#loginButton").click( function()  {
   console.log("Hello User:");
   var theEmail = $("#theEmail").val();
   console.log(theEmail);
   var thePassword = $("#thePassword").val();
   console.log(thePassword);
   var whole = {email: theEmail, password: thePassword};
   auth.login('password', whole);
  });
});
























