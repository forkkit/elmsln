(function ($, Drupal) {

	Drupal.behaviors.foundation_access = {
		attach: function(context, settings) {
			// Get your Yeti started.
			
			// Active Outline Accordion Menu
			// block--cis-service-connection--active-outline.tpl.php
			$('.accordion').hide(); //hide accordion items on page load
			$('.accordion-btn').click(function() {//toggle the clicked dl item
				var $this = $(this);
				//$('.accordion-btn').addClass('active');
				$('.accordion').not($this.next()).hide(); // close all items except for current clicked item
				//$('.accordion-btn').not($this.next()).removeClass('active');
				$this.next().toggle(); // open or close cliked item
			});





			// Move accessibility link to action-links menu
			$( ".accessibility-content-toggle a" ).appendTo( ".action-links-bar ul" ).wrap("<li></li>");
			$( ".accessibility-content-toggle").hide();

			// Scroll to Top
			
			$('#banner-image-sticky').click(function() {//toggle the clicked dl item
				$('html, body').animate({scrollTop: "0px"}, 800); // close all items except for current clicked item
			});

			////////////
			// Resize Content
			////////////

			$(window).resize(function() {
		        resizeContent();
		    });
			function resizeContent() {
			
				// Window Height Variable
			    var windowHeight = $(window).height();
			    
			    // Height of space above visible area in window
				var windowTop = $(window).scrollTop();
				
				// Sticky Elements Height Variables
				var heightTopbarNavSticky = $('#topbarnav-sticky').height(); // height of sticky topbar
				var heightBannerImageSticky = $('#banner-image-sticky').height(); // height of sticky topbar
			    var heightlmslessSticky = $('#lmsless-bar-sticky').height(); // height of sticky LMSLess Bar
			    
			    // Active Outline Height Variable
			    var heightOutlineNavSticky = $('#activeoutline-sticky').height();
			    
			    // Total Height Sticky Elements Height Variables
			    var totalHeightStickies = heightOutlineNavSticky + heightTopbarNavSticky + heightBannerImageSticky + heightlmslessSticky;

				// Topbar Nav Variables
				var topOffsetTopbarnav = $('#topbarnav').offset().top; // returns number
				var heightTopbarnav = $('#topbarnav').outerHeight(true); // returns number
				var bottomOffsetTopbarnav = heightTopbarnav + topOffsetTopbarnav; // returns number

				// Active Outline Variables
				var topOffsetOutlineNav = $('#activeoutline').offset().top;
				var heightOutlineNav = $('#activeoutline').outerHeight(true);
				var bottomOffsetOutlineNav = heightOutlineNav + topOffsetOutlineNav + 80; // TODO - figure out why I need 50px more

				// Active Outline Sticky Variables
				var topOffsetOutlineNavSticky = $('#activeoutline-sticky').offset().top;
				var heightOutlineNavSticky = $('#activeoutline-sticky').outerHeight(true);
				var bottomOffsetOutlineNavSticky = heightOutlineNavSticky + topOffsetOutlineNavSticky;


				/////////
				/// To Do:
				/// Instead of hiding upon resize, just disable margin changes so users can scroll up and down :)
				////////

				if (windowHeight < totalHeightStickies && bottomOffsetOutlineNav < windowTop) { // if the height of the window is smaller than the total height of all stickies AND we are not scrolled to the top of the page
					$('#activeoutline-sticky').css({display:'none'}); // Set sticky active outline to hidden
					//$('#activeoutline').css({opacity: 1});
					console.log("hide");
				}
				else if (windowHeight > totalHeightStickies && bottomOffsetOutlineNav > windowTop) { // if the height of the window is larger than the total height of all stickies AND we are scrolled to the top of the page
					$('#activeoutline-sticky').css({display:'none'}); // Set sticky active outline to visible
					//$('#activeoutline').css({opacity: 1});
					console.log("hide");
				}
				else if (windowHeight < totalHeightStickies && bottomOffsetOutlineNav < windowTop) { // if the height of the window is smaller than the total height of all stickies AND we are not scrolled to the top of the page
					$('#activeoutline-sticky').css({display:'none'}); // Set sticky active outline to hidden
					//$('#activeoutline').css({opacity: 1});
					console.log("hide");
				}
				else if (windowHeight > totalHeightStickies && bottomOffsetOutlineNav < windowTop) { // if the height of the window is larger than the total height of all stickies AND we are not scrolled to the top of the page
					$('#activeoutline-sticky').css({display: 'block', marginTop: windowTop - bottomOffsetTopbarnav }); // Set sticky active outline to visible
					//$('#activeoutline').css({opacity: 0});
					console.log("show");
				}
				
			    else { // Otherwise, make sure it's visible
					$('#activeoutline-sticky').css({display:'none'}); // Set sticky active outline to hidden
					//$('#activeoutline').css({opacity: 1});
					console.log("hide otherwise");
			    }
			}

			////////////
			// Sticky On Scroll
			////////////
			$(window).scroll(function(){ // scroll event  
				
				////////////
				// sticky stuff from http://andrewhenderson.me/tutorial/jquery-sticky-sidebar/
				////////////
				
				// Height of space above visible area in window
				var windowTop = $(window).scrollTop();

				////////////
				// StickyLmsless Bar
				////////////
				
				// LMSLess Bar Variables
				var topOffsetlmsless = $('#lmsless-bar').offset().top; // returns number
				var heightlmsless = $('#lmsless-bar').outerHeight(true); // NOT USED DIRECTLY
				var bottomOffsetlmsless = heightlmsless + topOffsetlmsless + 10; // returns number NOT USED DIRECTLY

				if (bottomOffsetlmsless < windowTop) { // Go into sticky mode
					$('#lmsless-bar-sticky').addClass( "locator" );
				}
			    else { // Do not go into sticky mode
					$('#lmsless-bar-sticky').removeClass( "locator" );
			    }
				
				////////////
				// Banner Image
				////////////
				
				// Banner Image Variables
				var topOffsetBanner = $('#banner-image').offset().top; // returns number
				var heightBanner = $('#banner-image').outerHeight(true);
				var bottomOffsetBanner = heightBanner + topOffsetBanner - heightlmsless + 10; // returns number

				if (bottomOffsetBanner < windowTop) { // Go into sticky mode
					$('#banner-image-sticky').addClass( "locator" );
				}
			    else { // Do not go into sticky mode
					$('#banner-image-sticky').removeClass( "locator" );
			    }
				
				////////////
				// Topbar Nav
				////////////
				
				// Topbar Nav Variables
				var topOffsetTopbarnav = $('#topbarnav').offset().top; // returns number
				var heightTopbarnav = $('#topbarnav').outerHeight(true); // returns number
				var bottomOffsetTopbarnav = heightTopbarnav + topOffsetTopbarnav; // returns number

				if (bottomOffsetTopbarnav < windowTop) { // Go into sticky mode
					$('#topbarnav-sticky').addClass( "locator" );
				}
			    else { // Do not go into sticky mode
					$('#topbarnav-sticky').removeClass( "locator" );
			    }

				////////////
				// Active Outline
				////////////
				
				////////////////////////////////////
			    // Exact Duplicate Variables from window resize
			    ////////////////////////////////////
			    
			    // Window Height Variable
			    var windowHeight = $(window).height();
				
				// Sticky Elements Height Variables
				var heightTopbarNavSticky = $('#topbarnav-sticky').height(); // height of sticky topbar
				var heightBannerImageSticky = $('#banner-image-sticky').height(); // height of sticky topbar
			    var heightlmslessSticky = $('#lmsless-bar-sticky').height(); // height of sticky LMSLess Bar
			    
			    // Active Outline Height Variable
			    var heightOutlineNavSticky = $('#activeoutline-sticky').height();
			    
			    // Total Height Sticky Elements Height Variables
			    var totalHeightStickies = heightOutlineNavSticky + heightTopbarNavSticky + heightBannerImageSticky + heightlmslessSticky;
			    
			    ////////////////////////////////////
			    
				// Sticky Topbar Nav Variables
				var heightTopbarNavSticky = $('#topbarnav-sticky').outerHeight(true); //height of sticky topbar
				var topOffsetTopbarNavSticky = $('#topbarnav-sticky').offset().top;
				var bottomTopbarNavSticky = topOffsetTopbarNavSticky + heightTopbarNavSticky;

				// Active Outline Variables
				var topOffsetOutlineNav = $('#activeoutline').offset().top;
				var heightOutlineNav = $('#activeoutline').outerHeight(true);
				var bottomOffsetOutlineNav = heightOutlineNav + topOffsetOutlineNav + 80; // TODO - figure out why I need 50px more

				if (topOffsetOutlineNav < windowTop && windowHeight > totalHeightStickies) { // Go into sticky mode
					
					$('#activeoutline-sticky').css({display: 'block', marginTop: windowTop - bottomOffsetTopbarnav });
				}
			    else { // Do not go into sticky mode
					$('#activeoutline-sticky').css({display:'none', marginTop: 0});
			    }

			});
		}
	};
})(jQuery, Drupal);