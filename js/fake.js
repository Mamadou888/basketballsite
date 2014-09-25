$(document).ready(function(){
	
$('#signup').click(function(){
	var email = $('#email').val();
	var password = $('#password').val();
	var myRef = new Firebase("http://mygamebook.firebaseio.com");
	var auth = new FirebaseSimpleLogin(myRef, function(error, user){
	auth.createUser(email, password, function(error, user) {
		
		if (error === null) {
			console.log("User created successfully:", user);
		} else {
			console.log("Error creating user:", error);
		}
		$('#email').val("");
		$('#password').val("");
		window.location.href = "login.html";

	});
	});

	
});

});