// mobile menu
$(function() {


	var menuToggle = 0;
	
	$("#nav-button").click(function() {
		if (menuToggle == 0) {
			menuToggle = 1;
			$("#nav").css("visibility", "visible");
			$("#nav-button").html("×");
			$("#nav-button").css("font-size", "20px");
		}
		else {
			menuToggle = 0;
			$("#nav").css("visibility", "hidden");
			$("#nav-button").html("Menu");
			$("#nav-button").css("font-size", "1em");
		}
	});

	var tocToggle = 0;
	
	$("#toc-button").click(function() {
		if (tocToggle == 0) {
			tocToggle = 1;
			$("#toc-text").css("display", "block");
			$("#toc-button").html("×");
			$("#toc-button").css("font-size", "20px");
			$(".toc-title").css("align-items", "flex-start");
			$("#contents-title").css("display", "block");

		}
		else {
			tocToggle = 0;
			$("#toc-text").css("display", "none");
			$("#toc-button").html("Contents");
			$("#toc-button").css("font-size", "1em");
			$(".toc-title").css("align-items", "baseline");
			$("#contents-title").css("display", "none");
		}
	});

	$(window).on('resize', function(){
    	var win = $(this); //this = window
    	if (win.width() >= 750) {
    		$("#nav").css("visibility", "visible");
    	}
    	else {
    		$("#nav").css("visibility", "hidden");
    		$("#nav-button").html("Menu");
    		$("#nav-button").css("font-size", "1em");
    	}

    	if (win.width() >= 600) {
    		$("#toc-text").css("display", "block");
    	}
    	else {
    		$("#toc-text").css("display", "none");
			$("#toc-button").html("Contents");
			$("#toc-button").css("font-size", "1em");
			$(".toc-title").css("align-items", "baseline");
			$("#contents-title").css("display", "none");
    	}
	});
});