function addition_Function() {  //This function utilizes the addition operator
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() { //This function utilizes the subtraction operator
    var subtraction = 10 - 4;
    document.getElementById("subtract").innerHTML = "10 - 4 = " + subtraction;
}

function multiplication() { //This function utilizes the mulitplication operator
    var simple_Math = 12 * 8;
    document.getElementById("multiply").innerHTML = "12 * 8 = " + simple_Math;
}

function division() { //This function utilizes the division operator
    var div_math = 50 / 5;
    document.getElementById("divide").innerHTML = "50 / 5 = " + div_math;
}

function more_Math() { //This function utilizes multiple operators and executes by order of opercation
    var simple_Math = (2 + 4) * 5 / 3 - 2;
    document.getElementById("moremath").innerHTML = "2 + 4, multiplied by 5, divided by 3 and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //This function utilizes the modulues operator which is designed to give you the remainder of two integers
    var remainder = 23 % 8;
    document.getElementById("remainder").innerHTML = "When you divide 23 by 8 you have a remainder of: " + remainder;
}

function negation_Operator() { //This function shows the negative equivalent
    var p = 15;
    document.getElementById("negation").innerHTML = -p;
}

function countup() { //This function will show 1 since it counts up and starts at 0
    var x = 0;
    x++
    document.getElementById("countup").innerHTML = x;
}

function countdown() { //This function will show 9 since it counts down and starts at 10
    var y = 10;
    y--
    document.getElementById("countdown").innerHTML = y;
}

function random() { //This function  will chooose a random number between 0 and 100
    document.getElementById("random").innerHTML = Math.random() * 100;
}

function roundup() { //This function will round the number to the nearest integer
    document.getElementById("roundup").innerHTML = Math.round(7.8);
}