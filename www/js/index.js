$(document).on("pagecreate","#pageone",function(){
  
  	$("#MenuExit").on("click", (function(){
		createDialog();				
	});  


});

/*function exitDialog() {
      
	navigator.notification.confirm(
    	"Are you sure you want to exit?",  
        dialogDismissed,        
        "Exit Application",            
        ['Yes', 'No']                  
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
		window.close;
		new Toast({content: "Gotta love maccies!", duration: 3000});
	} else if {
		(buttonIndex==2) new Toast({content: "Cancelled", duration: 3000});

}*/
	
	function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	"Do you fancy maccies?",  // message
        dialogDismissed,         // callback
        "I'm hungry!",            // title
        ['Of course!', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Gotta love maccies!", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: "I'll get you some selects anyway", duration: 3000});

