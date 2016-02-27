$(document).ready(function() {

$.fn.showPass = function(showBox) {
			
			
			var inputName = $(this);
			
			var inputAttr = inputName.attr('type');
		
			setInterval(function() {
				
				inputAttr = inputName.attr('type');
				
			}, 10);
		
		$(showBox).click(function() {
			
					
			if (inputAttr === "password") 
			{
				inputName.prop('type', 'text');
			}
			else
			{
				inputName.prop('type', 'password');
			}
		}); // end click
	
			}; // end function
		
		
		


});