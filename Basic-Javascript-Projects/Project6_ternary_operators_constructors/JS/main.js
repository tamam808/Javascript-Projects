function ride_Function() { //This function's purpose is to utilize the ternary operator
    var height, can_ride;
    height = document.getElementById("height").value; //This sets the height variable's value to the value in the element with the id "height" in the html code
    can_ride = (height < 52) ? "You are too short":"You are tall enough"; //This uses the ternary operator to output either string result based on the boolean logic operator before it
    document.getElementById("ride").innerHTML = can_ride + " to ride."; //This tells the function to write the result of the can_ride variable as well as "to ride." in the HTML element with the id "ride"
}

function favSport(Name, Team, Player, Since) { //This function's purpose is to create a constructor using "this" keywords
    this.favSport_Name = Name;
    this.favSport_Team = Team;
    this.favSport_Player = Player;
    this.favSport_Since = Since;
}
var Tama = new favSport("Basketball", "Lakers", "Kobe Bryant", 2007);  //This section of code utilizes the "new" to create values assigned to the favSport function
var Emily = new favSport("Football", "49ers", "Jerry Rice", 1998);
var Kawana = new favSport("Basketball", "Wichever team Lebron is on", "Lebron James", 2008);
function myFunction() {                                                //This function will call to the favSport function to grab code and display it in addition to the strings
    document.getElementById("new_and_this").innerHTML = "Emily's favorite sport is " + Emily.favSport_Name + " and her favorite team is the " + Emily.favSport_Team + ". Her favorite player is " + Emily.favSport_Player + " and she has been a fan since " + Emily.favSport_Since + "!";
}

function count_Function() {                                            //This function has other functions nested in it
    document.getElementById("nested_function").innerHTML = count();    //This tells the function to display the result of the nested function in the html element with the ID "nested_function"
    function count() {                                                 //This function will add 1 to the starting point which is given the value of 1     
        var starting_point = 1;
        function plus_one () {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}