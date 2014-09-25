$(document).ready(function() {

  var ref = new Firebase("https://mygamebook.firebaseio.com");

  var auth = new FirebaseSimpleLogin(ref, function(error, user) {

    if (error) {
      // an error occurred while attempting login
      console.log(error);
      alert(error);
    } else if (user) {
      // user authenticated with Firebase
      console.log("User ID: " + user.uid + ", Provider: " + user.provider);
      window.location.href = "nextTest.html";

    } else {
      // user is logged out
    }

      });
 //  THE FUCKING PROBLEM WITH THIS CODE IS THAT IT IS NOT ACCEPTING VALUES
//IT WILL NOT ACCEPT THE VALUES AND USE THEM TO LOG IN
  $("#loginFirstButton").click( function()  {
    // alert("Anything")
    // console.log("Hello User:");
   var theseEmail = $("#email").val();
    // console.log(email);
    var thesePassword = $("#password").val();
    // console.log(password);
    // var whole = {email: email, password: password};
    

    auth.login('password', {email: "yi@gmail.com", password: "cool"});
    debugger

   });

});





























