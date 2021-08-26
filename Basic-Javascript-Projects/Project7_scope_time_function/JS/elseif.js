function time_Function() {                  //This function uses if, else if, and else statements to get multiple results
    var Time = new Date().getHours();       //Set the variable "Time" to the current time hour of the users computer
    var Reply;                          
    if (Time < 12 == Time > 0) {            //This if statement checks to see if the current time is somewhere between 12 and 0 using the == operator
        Reply = "It is morning time!";      //If the statement is true above then we set the value of variable "Reply" to "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {     //This else if statement checks to see if the current time is somewhere between 12 and 18 using the == operator
        Reply = "It is afternoon.";         //If the statement is true above then we set the value of variable "Reply" to "It is afternoon."
    }
    else {                                  //Else, if both above statements are false, then the current time is after 18
        Reply = "It is evening time.";      //We now set the value of the variable "Reply" to "it is evening time."
    }
    document.getElementById("time_of_day").innerHTML = Reply;   //This tells the function to display the current value of the variable "Reply" at the element in the html with the id "time_of_day"
}
