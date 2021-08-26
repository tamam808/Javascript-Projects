function full_Sentence() {                                      //This function is set up to concatenate multiple variables that cointain strings in order to make a full sentence
    var p1 = "My name is ";                                     //Setting variables up to different sections of the sentence we want to display
    var p2 = "Tama Moors and ";
    var p3 = "I am currently in school ";
    var p4 = "to become a junior software developer!";
    var whole_sentence = p1.concat(p2, p3, p4);                 //This variable concatenates all of the previous variables in the order they are listed 
    var section = p2.slice(0, 10);                              //This variable selects a slice of the string from the variable "p2" in order to display the characters in spots 0 through 10
    document.getElementById("concat").innerHTML = whole_sentence;   //This command displays the variable "whole_sentence" in the element in the html with the id "concat"
    document.getElementById("slice").innerHTML = section;           //This command displays the variable "section" in the element in the html with the id "slice"
}

function number_method() {                                      //This function will display the number as a string data type
    var x = 17                                                  //Setting the variable x to the value 17
    document.getElementById("number_to_string").innerHTML = x.toString();   //This command displays the number 17 as a string. Which is still 17
}

function precision_method() {                                   //This function will display only the amount of characters of a number that we choose
    var X = 3.14159265                                          //Setting variable X to 3.14159265 which has a total of 9 characters
    document.getElementById("precision").innerHTML = X.toPrecision(3);  //This command will tell the function to display only the first 3 characters of variable X
}