function my_Dictionary() { //Function that creates a dictionary named Car. Car has 5 KVPs
    var Car ={
        Manufacturer: "Kia",
        Model: "Sorento",
        Type: "SUV",
        Year: 2021,
        Color: "Blue",
    };
    delete Car.Color; //This deletes the value portion of the KVP where the key is "Color"
    document.getElementById("dictionary").innerHTML = Car.Model; //This tells the HTML element with the ID "dictionary" to display the Value with the Key "Model" when the function is called
    document.getElementById("dictionary2").innerHTML = Car.Color; //This tells the HTML element with the ID "dictionary2" to display the Value with the Key "Color" but since we have deleted that value previously in the code, it results in "undefined"
}