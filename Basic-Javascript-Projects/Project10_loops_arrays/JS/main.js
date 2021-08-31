function call_Loop() {      //This function uses a while loop to display numbers up to 24
    var Digit = "";         //setting the variable digit
    var X = 1;              //setting the variable X to 1
    while (X < 25) {        //this while statement says that, while X is less than 1
        Digit += "<br>" + X;    //we will change the value of digit to "<br" + the current value of X
        X++;                    //then we add 1 to the current value of X and check the condition of the while loop again
    }
    document.getElementById("loop").innerHTML = Digit;
}

var instruments = ["Ukulele", "Piano", "Guitar", "Bass", "Drums", "Saxophone"]; //setting a variable instruments to an array of items
var content = "";   //setting the variable content
var Y;  //declaring variable Y
function for_Loop() {                           //This function will list everything in the array
    for (Y = 0; Y < instruments.length; Y++) {  //this for loop states that we set the variable Y to 0, and then we check wether or not Y is less than the amount of items in array "instruments" and after every loop we add 1 to Y
        content += instruments[Y] + "<br>";     //we now change the value of content to the value of the element located at the Y index of the array named instruments and we add a break in the line
    }
    document.getElementById("list_of_instruments").innerHTML = content; //here we tell the function to display the variable content
}

function array_Function() {                     //here we are creating an array by declaring the values of each element at an index individually
    var feeling = [];
    feeling[0] = "happy";                       //we are declaring that the value of the element at index 0 is "happy"
    feeling[1] = "excited";                     //we are declaring that the value of the element at index 1 is "excited"
    feeling[2] = "tired";                       //we are declaring that the value of the element at index 2 is "tired"
    feeling[3] = "angry";                       //we are declaring that the value of the element at index 3 is "angry"
    feeling[4] = "exhausted";                   //we are declaring that the value of the element at index 4 is "exhausted"
    feeling[5] = "hungry";                      //we are declaring that the value of the element at index 5 is "hungry"
    document.getElementById("array").innerHTML = "Right now, I am feeling " + feeling[0] + "."; //we then display to the element in the html with the id "array" 
 }

function constant_Function() {                  //this function will create an object with the constant keyword
    const vehicle = {make:"Toyota", model:"Tacoma", color:"grey"};  //here we create the object vehicle with the const keyword. then we give it 3 attributes make model and color and we give those their own values
    vehicle.owner = "Tama";                                         //here we add a new attribute called owner and give it the value Tama
    vehicle.model = "RAV4";                                         //here we change the value of the model attribute to RAV4
    document.getElementById("constant").innerHTML = vehicle.owner + " owns a " + vehicle.color + " " + vehicle.make + " " + vehicle.model + ".";    //here we display the value of vehicle attributes owner, color, make, and model in a concatenated string
}

let person = {                                  //here we create an object with the let keyword
    firstname: "Tama ",                         //we create an attribute named firstname and we give it the value Tama
    lastname: "Moors ",                         //we create an attribute named lastname and we give it the value Moors
    icecream: "mint chocolate chip ",           //we create an attribute named icecream and we give it the value mint chocolate chip
    desciption : function() {                   //here the method is the description function which will use the return keyword to  give the description function the value of a concatenated string
        return "My name is " + person.firstname + person.lastname + "and my favorite ice cream is " + person.icecream;
    }
};
document.getElementById("person_object").innerHTML = person.desciption(); //here we actually tell the html to display the concatenated string created with the description function

function cont() {                               //this function utilizes the continue statement 
    let text = "";                              //declare the variable text to be a string
    for (let i = 0; i < 10; i++) {              //this for statement states that we let variable i = 0, then check whether i is less than 10, and then after the loop we add 1 to i
        if (i === 5) { continue; }              //this if statement says that if i is === to 5, we skip that iteration of the loop
        text += "The number is " + i + "<br>";  //here we set the value of text to a concatenated string including the current value of i
    }
    document.getElementById("cont").innerHTML = text;   //this tells the function to display the current value of text at the element in HTML with the id "cont"
}

function break_function() {                     //this function utilizes the break statement
    let text = "";                              //declare teh variable text to be a string
    for (let i = 0; i < 10; i++) {              //this for statement states that we let variable i = 0, then check whether i is less than 10, and then after the loop we add 1 to i
        if (i === 8) { break; }                 //this if statement says that is i is === to 8 we break the loop and stop the execution
        text += "The number is " + i + "<br>";  //here we set the value of text to a concatenated string including the current value of i
    }
    document.getElementById("break").innerHTML = text;  //this tells the function to display the current value of text at the element in HTML with the id "break
}