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
  } else {
    // user is logged out
  }

  $("#goToMyProfile").click ( function() {
    window.location.href = "personProfile.html";
  })

  $("#addMoreInfo").click(function()  {
    var userFullName = $("#fullName").val();
    var userUserName = $("#gotGameName").val();
    var userCity = $("#city").val();
    var usersRef = ref.child("users");
    usersRef.child(user.uid).child('user_info').set({
      fullName: userFullName,
      gotGameUsername: userUserName,
      city: userCity
    });
    alert("Just added");
    window.location.href = "personProfile.html";
  });

  $("#newUserButton").click(function()  {
    var newEmail = $("#newEmail").val();
    var newPassword = $("#newPassword").val();
    auth.createUser( "hdkiller3@gmail.com", "doggy123", function(error, user) {
      if (error === null) {
        console.log("User created successfully:", user);
      // save new user's profile into Firebase so we can
      // list users, use them in security rules, and show profiles
      ref.child('users').child(user.uid).set({
        user_email: user.email,
        provider: user.provider,
        provider_id: user.id,
        user_info: "Users Gamer Info",
        myGameBookData: "History"
      });
      $(".nav").append("<li>Now log in!</li>")
      window.location.href = 'loginAfterSignUp.html';
    } else {
      alert("Error")
      console.log("Error creating user:", error);
    }
        ref.child('users').child(user.uid).set({
        user_email: user.email,
        provider: user.provider,
        provider_id: user.id,
        user_info: "Users Gamer Info",
        myGameBookData: "History"
      });
  });
  });

  //So when you press generate it sends all the 
  //Data you entered into your personnal profile through firebase

  $("#generate").click( function() {
    var yourScore = $("#yourScore").val();
    var enemyScore = $("#enemyScore").val();
    var datePlayed = $("#datePlayed").val();
    var usersRef = ref.child("users");
    usersRef.child(user.uid).child('myGameBookData').push({
      Your_Score: yourScore,
      Enemys_Score: enemyScore,
      Date_Played: datePlayed
    })
  });
  // When the page loads of the person gamebook, 
  // It will automatically show their list of wins and losses
  //** Also When they enter in scores, it goes to either win or loss and gets saved to firebase
  ref.child("users").child(user.uid).child('myGameBookData').on('child_added', function (snapshot) {
    var scores = snapshot.val();
    var thisDatePlayed = scores.Date_Played
    var thisEnemyScore = parseInt(scores.Enemys_Score, 10);
    var thisYourScore = parseInt(scores.Your_Score, 10);
    if (thisYourScore > thisEnemyScore) {
      var wonDifference = parseInt(thisYourScore-thisEnemyScore, 10);
      $(".wins").append("<br>" + "You won by "+wonDifference+ " on "+ thisDatePlayed)
      console.log("You won by "+wonDifference+ " on "+ thisDatePlayed);
    } else if ( thisEnemyScore > thisYourScore) {
      var lossDifference = (thisYourScore - thisEnemyScore);
      var lossDifferenceEdited = (lossDifference*(-1));
      $(".losses").append("<br>" + "You lost by "+lossDifferenceEdited+" on "+ thisDatePlayed);
      console.log("You lost by "+lossDifference+" on "+ thisDatePlayed);
    }
    else {
      console.log("Congrats on the tie on "+thisDatePlayed+" , Work harder to win next time!");
    }
  });
});












});





