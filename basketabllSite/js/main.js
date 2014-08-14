var main = function() {
	debugger
	$("#got-name").focus();

	$(".login_page").hide(); // This will hide the log-in in the beg.
    
    var toggleLogin = function() {
    	debugger
        // $(".login_page").show();
        $(".login_page").toggle();
        //then this will toggle it to show and hide
	}
    $("#login").click(toggleLogin);

};
  
 $(document).ready(main);