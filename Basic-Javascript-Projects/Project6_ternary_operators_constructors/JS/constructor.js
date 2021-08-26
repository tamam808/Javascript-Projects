function Vehicle(Make, Model, Year, Color) {              //This function is a constructor using "this" keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                   //This part of the code uses the "new" keyword to create values 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {                                                  //This function will grab values from the constructor and the new values above to display them in addition to the strings
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year
}