$(document).ready(function() {

	var myRef = new Firebase("https://basketballsite.firebaseio.com");
	var auth = new FirebaseSimpleLogin(myRef, function(error, user) {
		if (error) {
    // an error occurred while attempting login
    console.log(error);
    alert(error);
	} else if (user) {
	    // user authenticated with Firebase
	    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
	    $("#username").text("Welcome user " + user.email);
	} else {
	    // user is logged out
	}
	});

	var authRef = new Firebase("https://basketballsite.firebaseio.com/.info/authenticated");
	authRef.on("value", function(snap) {
		if (snap.val() === true) {
			console.log("Authenticated");
		} else {
			console.log("Not Authenticated");
		}
	});


		var newEmail = $("#newEmail").value;
		var newPassword = $("#newPassword").value;
			var createNewUser = function() {
			auth.createUser(newEmail, newPassword, function(error, user) {
			 if (error === null) {
			 	console.log("User created successfully:", user);
			 	alert("Congrat's, you have created an account!");
			 } else {
			 	console.log("Error creating user:", error);
			 	alert(error)
				// alert("Go to the homepage and log in now.")
				// window.location.href = "index.html";
			}
		});
	};

	$("#newUserButton").click(createNewUser())
});