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
Fiscal-Cliff (2018) GitHub - fiscal-cliff/phonegap-plugin-brightness: A phonegap 3.x plugin for brightness control within android and ios. [Online] Available at: https://github.com/fiscal-cliff/phonegap-plugin-brightness. [Accessed 1st March 2018].

The function below extends the code used above:
*/	


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
//Binds the question data together in a JSON array

var additionJSON = JSON.stringify(additionQuestions); //Changes the question data from an object to a string so that it can be stored locally
localStorage.setItem("additionSet", additionJSON);
//Storing data for the questions in local storage

additionGet = localStorage.getItem("additionSet");
addObj = JSON.parse(additionGet);
//Retrieves the question data from local storage and parses it back from a string to an object

$(document).on('deviceready', addQuesDeviceReady); //calls the "addQuesDeviceReady()" function when the device is ready
				   	   
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
//Displays the question data onto the relevant answer option buttons


//*********Addition Scoring**********
var additionScore = 0;
var additionHighScore = 0; 
//Sets the score and high score variables to a default of 0

function addPlusScore(){
	additionScore++;
} //Adds one to the score whenever the function is called
	
function AddQ1Op1() {
	$("#AddQ1Op1").css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionQ2';
	} /*This function is called when the button for the correct answer to the question is pressed.
		The text on the question buttons turns green to indicate that the answer is correct.
		A beep sound is outputted to provide the user with more positive feedback, confirming the correct answer.
		The function for adding one to the score is called to update the score variable.
		The updated score is displayed onto the screen.
		The page with the next question is then loaded.
	
	*/

function AddQ1Op2(){ 
	$("#AddQ1Op2").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ2';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function AddQ1Op3(){ 
	$("#AddQ1Op3").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ2';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function AddQ1Op4(){ 
	$("#AddQ1Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ2';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/


function AddQ2Op1(){ 
	$("#AddQ2Op1").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ3';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function AddQ2Op2(){ 
	$("#AddQ2Op2").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ3';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function AddQ2Op3() {
	$("#AddQ2Op3").css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionQ3';
	} /*This function is called when the button for the correct answer to the question is pressed.
		The text on the question buttons turns green to indicate that the answer is correct.
		A beep sound is outputted to provide the user with more positive feedback, confirming the correct answer.
		The function for adding one to the score is called to update the score variable.
		The updated score is displayed onto the screen.
		The page with the next question is then loaded.
	
	*/

function AddQ2Op4(){ 
	$("#AddQ2Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionQ3';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/


function AddQ3Op1(){ 
	$("#AddQ3Op1").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionResult';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the topic final result is then loaded.

	*/

function AddQ3Op2(){ 
	$("#AddQ3Op2").css("color", "green");
	navigator.notification.beep(1); 
	addPlusScore();
	$(".addScore").text(additionScore);
	window.location.href='#AdditionResult';
	} /*This function is called when the button for the correct answer to the question is pressed.
		The text on the question buttons turns green to indicate that the answer is correct.
		A beep sound is outputted to provide the user with more positive feedback, confirming the correct answer.
		The function for adding one to the score is called to update the score variable.
		The updated score is displayed onto the screen.
		The page with the topic final result is then loaded.
	
	*/

function AddQ3Op3() {
	$("#AddQ3Op3").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionResult';
	} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the topic final result is then loaded.

	*/

function AddQ3Op4(){ 
	$("#AddQ3Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#AdditionResult';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the topic final result is then loaded.

	*/

function addHighScore(){ 
		window.location.href='#AdditionMenu';
		if (additionScore > additionHighScore){
			additionHighScore = additionScore;
		}
		$(".AddHighScore").text(additionHighScore);
		localStorage.setItem("additionHighScoreSet", additionHighScore); //Storing data
		//additionHighScoreGet = localStorage.getItem("additionHighScoreSet");
		additionScore = 0;
		//$(".AddHighScore").text(additionHighScore);
		//document.getElementsByClassName("AddHighScore").innerHTML = localStorage.getItem("additionHighScoreSet");	
}

$(document).on('deviceready', addHighScoreDeviceReady); 
				   	   
function addHighScoreDeviceReady() { 
		document.getElementsByClassName("AddHighScore").innerHTML = localStorage.getItem("additionHighScoreSet");
};
//Retrieving data






//**********Subtraction Questions**********
var subQuestions = {
 		"subQues1": {
    			"option1": "121",
    			"option2": "119",
    			"option3": "120",
				"option4": "122"
		},
		
		"subQues2": {
    			"option1": "3.95",
    			"option2": "4.80",
    			"option3": "3.85",
				"option4": "4.85"
		},
	
		"subQues3": {
    			"option1": "5/8",
    			"option2": "5/11",
    			"option3": "5/7",
				"option4": "8/7"
		}
	}
//Binds the question data together in a JSON array

var subJSON = JSON.stringify(subQuestions); //Changes the question data from an object to a string so that it can be stored locally
localStorage.setItem("subSet", subJSON);
//Storing data for the questions in local storage

subGet = localStorage.getItem("subSet");
subObj = JSON.parse(subGet);
//Retrieves the question data from local storage and parses it back from a string to an object

$(document).on('deviceready', subQuesDeviceReady); //calls the "addQuesDeviceReady()" function when the device is ready
				   	   
function subQuesDeviceReady() { 
		$("#SubQ1Op1").text(subObj.subQues1.option1);
		$("#SubQ1Op2").text(subObj.subQues1.option2);
		$("#SubQ1Op3").text(subObj.subQues1.option3);
		$("#SubQ1Op4").text(subObj.subQues1.option4);
		
		$("#SubQ2Op1").text(subObj.subQues2.option1);
		$("#SubQ2Op2").text(subObj.subQues2.option2);
		$("#SubQ2Op3").text(subObj.subQues2.option3);
		$("#SubQ2Op4").text(subObj.subQues2.option4);
	
		$("#SubQ3Op1").text(subObj.subQues3.option1);
		$("#SubQ3Op2").text(subObj.subQues3.option2);
		$("#SubQ3Op3").text(subObj.subQues3.option3);
		$("#SubQ3Op4").text(subObj.subQues3.option4);
};
//Displays the question data onto the relevant answer option buttons


//*********Subtraction Scoring**********
var subScore = 0;
var subHighScore = 0; 
//Sets the score and high score variables to a default of 0

function subPlusScore(){
	subScore++;
} //Adds one to the score whenever the function is called
	
function SubQ1Op1() {
	$("#SubQ1Op1").css("color", "green");
	navigator.notification.beep(1); 
	subPlusScore();
	$(".subScore").text(subScore);
	window.location.href='#SubQ2';
	} /*This function is called when the button for the correct answer to the question is pressed.
		The text on the question buttons turns green to indicate that the answer is correct.
		A beep sound is outputted to provide the user with more positive feedback, confirming the correct answer.
		The function for adding one to the score is called to update the score variable.
		The updated score is displayed onto the screen.
		The page with the next question is then loaded.
	
	*/

function SubQ1Op2(){ 
	$("#SubQ1Op2").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubQ2';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function SubQ1Op3(){ 
	$("#SubQ1Op3").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubQ2';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function SubQ1Op4(){ 
	$("#SubQ1Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubQ2';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/


function SubQ2Op1(){ 
	$("#SubQ2Op1").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubQ3';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function SubQ2Op2(){ 
	$("#SubQ2Op2").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubQ3';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/

function SubQ2Op3() {
	$("#SubQ2Op3").css("color", "green");
	navigator.notification.beep(1); 
	subPlusScore();
	$(".subScore").text(subScore);
	window.location.href='#SubQ3';
	} /*This function is called when the button for the correct answer to the question is pressed.
		The text on the question buttons turns green to indicate that the answer is correct.
		A beep sound is outputted to provide the user with more positive feedback, confirming the correct answer.
		The function for adding one to the score is called to update the score variable.
		The updated score is displayed onto the screen.
		The page with the next question is then loaded.
	
	*/

function SubQ2Op4(){ 
	$("#SubQ2Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubQ3';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the next question is then loaded.

	*/


function SubQ3Op1(){ 
	$("#SubQ3Op1").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubResult';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the topic final result is then loaded.

	*/

function SubQ3Op2(){ 
	$("#SubQ3Op2").css("color", "green");
	navigator.notification.beep(1); 
	subPlusScore();
	$(".subScore").text(subScore);
	window.location.href='#SubResult';
	} /*This function is called when the button for the correct answer to the question is pressed.
		The text on the question buttons turns green to indicate that the answer is correct.
		A beep sound is outputted to provide the user with more positive feedback, confirming the correct answer.
		The function for adding one to the score is called to update the score variable.
		The updated score is displayed onto the screen.
		The page with the topic final result is then loaded.
	
	*/

function SubQ3Op3() {
	$("#SubQ3Op3").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubResult';
	} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the topic final result is then loaded.

	*/

function SubQ3Op4(){ 
	$("#SubQ3Op4").css("color", "red");
	navigator.vibrate(2000); 
	window.location.href='#SubResult';
} /*This function is called when a button for an incorrect answer to the question is pressed.
	The text on the question answer button turns red to indicate that the answer is incorrect.
	The device vibrates for 2 seconds to provide more feedback to confirm to the user that the answer is incorrect.
	The page with the topic final result is then loaded.

	*/

function subHighScore(){ 
		window.location.href='#SubMenu';
		if (subScore > subHighScore){
			subHighScore = subScore;
		}
		$(".SubHighScore").text(subHighScore);
		localStorage.setItem("subHighScoreSet", subHighScore); //Storing data
		//subHighScoreGet = localStorage.getItem("subHighScoreSet");
		subScore = 0;
		//$(".SubHighScore").text(subHighScore);
		//document.getElementsByClassName("SubHighScore").innerHTML = localStorage.getItem("subHighScoreSet");	
}

$(document).on('deviceready', subHighScoreDeviceReady); 
				   	   
function subHighScoreDeviceReady() { 
		document.getElementsByClassName("SubHighScore").innerHTML = localStorage.getItem("subHighScoreSet");
};
//Retrieving data






/* References:
Adobe (2018) Adobe PhoneGap Build. [Online] Available at: https://build.phonegap.com/docs/config-xml. [Accessed 3rd February 2018].

jQuery Foundation (2018) jQuery Mobile. [Online] Available at: http://jquerymobile.com/. [Accessed 3rd February 2018].

Apache Cordova (2018) Dialogs - Apache Cordova. [Online] Available at: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-dialogs/. [Accessed 26th February 2018].

Apache Cordova (2018) Vibration - Apache Cordova. [Online] Available at: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-vibration/. [Accessed 26th February 2018].

Fiscal-Cliff (2018) GitHub - fiscal-cliff/phonegap-plugin-brightness: A phonegap 3.x plugin for brightness control within android and ios. [Online] Available at: https://github.com/fiscal-cliff/phonegap-plugin-brightness. [Accessed 1st March 2018].
*/