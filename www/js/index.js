//**********Exit Application Dialog**********
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
		navigator.app.exitApp();
	} 
}
/*Function that closes the app if the user confirms they wish to exit
and displays a toat message which confirms their choice*/


//**********Power Saving**********
$(document).on('deviceready', function() {
			window.brightness = cordova.require("cordova.plugin.Brightness.Brightness");
			powerSaving(1); //This line has been added to set the screen brightness level to a default high level
		})
		function powerSaving(value) {
			brightness.powerSaving(value);
		}
		$(document).on("click","power", function(){ 
			powerSaving(0);
		}) //This function lowers the screen brightness level when the power saving button is pressed
/*Was inspired by
Fiscal-Cliff (2018) GitHub - fiscal-cliff/phonegap-plugin-brightness: A phonegap 3.x plugin for brightness control within android and ios. [Online] Available at: https://github.com/fiscal-cliff/phonegap-plugin-brightness. [Accessed 1st March 2018].*/