x = 10; //Set a global variable x to the value 10
function myFunction() { //This function will include the local variable and therefore will return a valid number
    var y = 15;
    document.write(x + y + "<br>");
}

function errorFunction() { //This function doesn's have access to the variable y set in the function above so it will not display. 
    console.log(2 + y); //It has the console.log statement so that we can check the console in the browser to see the issue with the code
}

myFunction();
errorFunction();

function get_Date() {                                                   //This function checks to see if the current time is between 12 and 18. If true it will display "Good Afternoon"
    var current_time = new Date().getHours();                           //This sets the value of the variable "current_time" to the current time in hours of the users computer
    if (12 < current_time == current_time < 18) {                       //This checks specifically to see if the current time is both greater than 12 and less than 18 
        document.getElementById("method").innerHTML = "Good Afternoon!";
    }
}

function myFunction2() {                                                //This function uses if and else statements to tell if someone is authorized to use the computer
    var verify = document.getElementById("verify").value;               //This line of code tells the function to set the value of variable "verify" to the value of the element named "verify" in html
    var verified;
    if (verify == "Tama") {                                             //This if statement says that if the value of the variable "verify" matches the string "Tama", to set the value of the                 
        verified = "Welcome, Tama. You are authorized to use this computer."  //"verified" variable to "Welcome, Tama. You are authorized to use this computer."
    }
    else {                                                              //This else statement will trigger if the value for variable "verify" DOES NOT equal "Tama"
        verified = "You are not authorized to use this computer."       //The else statement will then set the value of the variable "verified" to "You are not authorized to use this computer"
    }
    document.getElementById("verify_result").innerHTML = verified;      //This command tells the function to now display the value of the variable "verified" to the element in html with the id "verify result"
}