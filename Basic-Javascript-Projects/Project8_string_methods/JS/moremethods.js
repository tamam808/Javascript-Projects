function toUppercase() {                                        //This function capitalizes all letters in a string
    var str = "Hello there";                                    //Setting variable str to "Hello there" which only has 1 uppercase letter
    var str_up = str.toUpperCase();                             //Setting variable str_up to value of str, but in all Uppercase
    document.getElementById("example").innerHTML = str_up;      //This line tells the function to display the value of str_up to the element in the html with the id "example"
    document.getElementById("search").innerHTML = str.search("there");  //This line tells the function to search for the string "there" in the variable str, and then display the number 
}                                                                       //that coincides with the spot where the string "there" starts

function fixed_method() {                                       //This function rounds up a number to the place of the indicated character
    var x = 23.985                                              //Setting variable x to 23.985
    var rndX = x.toFixed(1);                                    //Rounding the value of variable x to the place in the 1 slot and then setting that new value to variable rndX
    document.getElementById("fixed").innerHTML = rndX;          //Displaying the value of rndX to the element in the html with the id "fixed"
}

function valueof_method() {                                     //This function will display the value of a variable that we set
    var y = "Howdy"                                             //Set the value of y to "Howdy"
    document.getElementById("valueof").innerHTML = y.valueOf(); //Display the value of variable y to the element in the html with the id "valueof"
}