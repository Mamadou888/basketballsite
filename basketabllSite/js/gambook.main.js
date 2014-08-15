$(document).ready(function() {

  var ref = new Firebase("https://basketballsite.firebaseio.com/");

  var generateScoreBook = function() {

    var logsRef = ref.child("logs");
    var yourScore = $("#yourScore").val();
    var enemyScore = $("#enemyScore").val();
    var datePlayed = $("#datePlayed").val();

    logsRef.push({myYourScore: yourScore,
    myEnemyScore: enemyScore
    myDatePlayed: datePlayed
    })

    if (yourScore > enemyScore) {
      var wonDifference = (yourScore-enemyScore);
      ref.push({mywondifference: wondifference, mydatePlayed: datePlayed})
      // $(".wins").append("<br></br>"+ "<li>"+"You won by " + wonDifference + " on " + datePlayed+"</li>");
     
          
    }
    else if (yourScore < enemyScore) {
      var lossDifference = (yourScore-enemyScore);
      $(".losses").append("<br></br>"+ "<li>"+ "You lost by " + lossDifference + " on " + datePlayed+"</li>");
      var hopperRef = ref.child("wins");
      hopperRef.update({
        "win1": "Yesterday"
      });
    }

  };

//   var logout = function() {
//     window.location.href = "index.html";
// };


  $("#generate").click(generateScoreBook);

//   var addNamestoMyFirebase = function() {
//     usersRef.child("alanisawesome").set({
//       date_of_birth: "June 23, 1912",
//       full_name: "Alan Turing"
//     });
//     usersRef.child("gracehop").set({
//       date_of_birth: "December 9, 1906",
//       full_name: "Grace Hopper"
//     });
//   };
// $("#generate").click(addNamestoMyFirebase);

});



// firebase.push({

// mywins
// mylosses: 



