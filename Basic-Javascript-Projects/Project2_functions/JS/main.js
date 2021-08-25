function My_First_Function() {                        //This function will display the variable string in the designated color when the user clicks on the button in html                      
    var str = "This text is orange!";
    var result = str.fontcolor("orange");
    document.getElementById("Orange_Text").innerHTML = result;
}

function myFunction() {                               //This function will display the variable string and concatenated text when the user clicks on the text in html
    var sentence ="I am learning";
    sentence += " a lot from this bootcamp!";
    document.getElementById("concatenate").innerHTML = sentence;
}