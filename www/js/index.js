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
			var brightness = cordova.require("cordova.plugin.Brightness.Brightness");
			powerSaving(1); 
		}) //This function sets the screen brightness level to a default high level when the device is ready to start the app


function powerSaving(value) {
			brightness.powerSaving(value); 
		} //This function sets the screen brightness to a value of either 1 or 0.5

/*The above two functions were inspired by and use a plugin from:
Fiscal-Cliff (2018) GitHub - fiscal-cliff/phonegap-plugin-brightness: A phonegap 3.x plugin for brightness control within android and ios. [Online] Available at: https://github.com/fiscal-cliff/phonegap-plugin-brightness. [Accessed 1st March 2018].*/	


$(document).on("click","power", function(){ 
			powerSaving(0.5);
		}) //This function lowers the screen brightness level when the power saving button is pressed



//**********Addition Questions**********
var additionQuestions = {
 		"addQues1": {
    			"option1": "320",
    			"option2": "300",
    			"option3": "280",
				"option4": "340"
		}
	}


$(document).on('pageinit', function() { 
	$("#AddQ1Op1").text(additionQuestions.addQues1.option1);
	$("#AddQ1Op2").text(additionQuestions.addQues1.option2);
	$("#AddQ1Op3").text(additionQuestions.addQues1.option3);
	$("#AddQ1Op4").text(additionQuestions.addQues1.option4);
})


var additionScore = 0;

function addPlusScore(){
	additionScore++;
}
	
$("#AddQ1Op1").on("tap", function(){ 
	$(this).css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionQ2';
})