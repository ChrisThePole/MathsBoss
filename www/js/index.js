$(document).on("pagecreate","#pageone",function(){
  	$("#MenuExit").on("click", (function(){
		exitDialog();				
	}))  
})
//Function that calls the "exitDialog()" function when the "MenuExit" button is pressed
			
			   
function exitDialog() {
	navigator.notification.confirm(
    	"Are you sure you want to exit?",  
        dialogDismissed,        
        "Exit Application",            
        ['Yes', 'No']                  
    );
}
 /*Function that creates a diaglog box asking the user if they definitely want to exit the app, 
 when the "MenuExit" button is pressed*/      	
        	
        	
function dialogDismissed(buttonIndex) {
	if(buttonIndex==1) {
		window.close;
		new Toast({content: "Exit Successful", duration: 3000});
	} else if (buttonIndex==2) {
		new Toast({content: "Cancelled", duration: 3000});
}
}
/*Function that closes the app if the user confirms they wish to exit
and displays a toat message which confirms their choice*/