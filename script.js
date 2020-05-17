// hide sidebar
$(function() {
	var sidebarToggle = 0;
	
	$("#sidebar-toggle").click(function() {
		if (sidebarToggle == 0) {
			sidebarToggle = 1;
			$("#toggle1").css("background", "black");
			$("#main-nav").css("opacity", "0");
			$("#main-menu").css("grid-column", "1 / 3");
			$("#toc-menu").css("opacity", "0");
			$("#sidebar").css("flex", "1.25");
		}
		else {
			sidebarToggle = 0;
			$("#toggle1").css("background", "white");
			$("#main-nav").css("opacity", "1");
			$("#main-menu").css("grid-column", "1 / 2");
			$("#toc-menu").css("opacity", "1");
			$("#sidebar").css("flex", "2.5");
		}
	});
});

// scroll syncing: 
// https://stackoverflow.com/questions/9236314/how-do-i-synchronize-the-scroll-position-of-two-divs
$(function() {
	var scrollToggle = 1;
	var isSyncingLeftScroll = false;
	var isSyncingRightScroll = false;
	var leftDiv = document.getElementById('original-piece');
	var rightDiv = document.getElementById('translation-piece');
		
	leftDiv.onscroll = function() {
	  if (!isSyncingLeftScroll && scrollToggle) {
	    isSyncingRightScroll = true;
	    rightDiv.scrollTop = this.scrollTop;
	  }
	  isSyncingLeftScroll = false;
	}

	rightDiv.onscroll = function() {
	  if (!isSyncingRightScroll && scrollToggle) {
	    isSyncingLeftScroll = true;
	    leftDiv.scrollTop = this.scrollTop;
	  }
	  isSyncingRightScroll = false;
	}

	$("#scroll-toggle").click(function() {
		if (scrollToggle == 1) {
			scrollToggle = 0;
			$("#toggle2").css("background", "white");
		}
		else {
			scrollToggle = 1;
			$("#toggle2").css("background", "black");
			leftDiv.scrollTop = rightDiv.scrollTop;
		}
	});
});

