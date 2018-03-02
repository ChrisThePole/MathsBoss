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


function getBrightnessPlugin() {
			window.brightness = cordova.require("cordova.plugin.Brightness.Brightness");
			powerSaving(1); 
		}
		function powerSaving(value) {
			brightness.powerSaving(value);
		}

		$(document).on("click","power", function(){
			powerSaving(0);
		})

		function getBrightness() {
			brightness.powerSaving(value);
		}
