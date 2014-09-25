$(document).ready(function() {

var authRef = new Firebase("https://mygamebook.firebaseio.com/.info/authenticated");
authRef.on("value", function(snap) {
  if (snap.val() === true) {
    alert("authenticated");
  } else {
    alert("not authenticated");
  }
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
      // window.location.href = "nextTest.html";
      $("#username").text("Welcome User " + user.email);

    } else {
      // user is logged out
      // auth.logout();
    }
});
  $("#gamebookButton").click( function()  {
  window.location.href="myGameBook.html";
  });

 $("#logoutButton").click(  function() {
    auth.logout();
    console.log("You have been logged out !");
    window.location.href = "index.html";
  });



});