function vote_Function() {                       //This function uses the ternary operation to display a different result based on the boolean logic operation's result
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age >= 18) ? "You are old enough":"You are too young";      //This is the boolean logic operation as well as the possible responses using the ternary operator
    document.getElementById("vote").innerHTML = can_vote + " to vote.";     //This displays the result of the ternary operation in addition to the string to the element in html with the id "vote"
}
