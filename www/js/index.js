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
		},
		
		"addQues2": {
    			"option1": "549.51",
    			"option2": "560.69",
    			"option3": "560.71",
				"option4": "556.82"
		},
	
		"addQues3": {
    			"option1": "6/8",
    			"option2": "6/7",
    			"option3": "5/7",
				"option4": "2/11"
		}
	}

var additionJSON = JSON.stringify(additionQuestions);
localStorage.setItem("additionSet", additionJSON);
//Storing data

additionGet = localStorage.getItem("additionSet");
addObj = JSON.parse(additionGet);


$(document).on('deviceready', addQuesDeviceReady); 
				   	   
function addQuesDeviceReady() { 
		$("#AddQ1Op1").text(addObj.addQues1.option1);
		$("#AddQ1Op2").text(addObj.addQues1.option2);
		$("#AddQ1Op3").text(addObj.addQues1.option3);
		$("#AddQ1Op4").text(addObj.addQues1.option4);
		
		$("#AddQ2Op1").text(addObj.addQues2.option1);
		$("#AddQ2Op2").text(addObj.addQues2.option2);
		$("#AddQ2Op3").text(addObj.addQues2.option3);
		$("#AddQ2Op4").text(addObj.addQues2.option4);
	
		$("#AddQ3Op1").text(addObj.addQues3.option1);
		$("#AddQ3Op2").text(addObj.addQues3.option2);
		$("#AddQ3Op3").text(addObj.addQues3.option3);
		$("#AddQ3Op4").text(addObj.addQues3.option4);
};
//Retrieving data


//*********Addition Scoring**********
var additionScore = 0;
var additionHighScore = 0;

function addPlusScore(){
	additionScore++;
}
	
	function AddQ1Op1() {
	$("#AddQ1Op1").css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionQ2';
	}

	function AddQ1Op2(){ 
	$("#AddQ1Op2").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ2';
}

	function AddQ1Op3(){ 
	$("#AddQ1Op3").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ2';
}

	function AddQ1Op4(){ 
	$("#AddQ1Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ2';
}


	function AddQ2Op1(){ 
	$("#AddQ2Op1").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ3';
}
	function AddQ2Op2(){ 
	$("#AddQ2Op2").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ3';
}

	function AddQ2Op3() {
	$("#AddQ2Op3").css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionQ3';
	}

	function AddQ2Op4(){ 
	$("#AddQ2Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ3';
}


	function AddQ3Op1(){ 
	$("#AddQ3Op1").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionResult';
}
	function AddQ3Op2(){ 
	$("#AddQ3Op2").css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionResult';
	}

	function AddQ3Op3() {
	$("#AddQ3Op3").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionResult';
	}
+
	function AddQ3Op4(){ 
	$("#AddQ3Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionResult';
}

	function addHighScore(){ 
		window.location.href='#AdditionMenu';
		additionHighScore = additionScore;
		$(".AddHighScore").text(additionHighScore);
		localStorage.setItem("additionHighScoreSet", additionHighScore); //Storing data
		//additionHighScoreGet = localStorage.getItem("additionHighScoreSet");
		additionScore = 0;
		//$(".AddHighScore").text(additionHighScore);
		document.getElementsByClassName("AddHighScore").innerHTML = localStorage.getItem("additionHighScoreSet");
		
}
