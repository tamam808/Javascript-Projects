function getReceipt() {                                     //this function creates the receipt shown on the app after user has completed their order
    var text1 = "<h3>You Ordered:</h3>";                    //set text 1 to be a h3 
    var runningTotal = 0;                                   
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //this var gets all the elements in html with class name "size"
    for (var i = 0; i < sizeArray.length; i++) {             //this for loop goes through the array to check which of the size elements have been selected
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Kids Pizza") {                     //this if statement checks to see which size has been selected by looking at the value of the array element selected
        sizeTotal = 6;                                       //then we give sizeTotal a new value depending on which array element has been selected
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;                                 //the running total var is given the value of the size Total var and then it calls the getVegetable function
    console.log(selectedSize + " = " + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getVegetable(runningTotal,text1);                       //this calls the getVegetable funciton
};

function getVegetable(runningTotal,text1) {                 //this function will check how many vegetables have been selected and add to the total price of the order
    var vegTotal = 0;                                       //set vegTotal to 0
    var selectedVeg = [];                                   //creates an empty array called selectedVeg
    var vegArray = document.getElementsByClassName("vegetables");   //this var gets all the elements in the html with class name "vegetables"
    for (var v = 0; v < vegArray.length; v++) {                     //this for loop will go through the array to check which, if any, vegetable elements have been selected
        if (vegArray[v].checked) {
            selectedVeg.push(vegArray[v].value);            //pushes the value of the selected elements to the selectedVeg array
            console.log("selected vegetable item: (" + vegArray[v].value + ")");
            text1 = text1 + vegArray[v].value + "<br>"      //this will add the vegetable selected to the text1 var which is shown in the receipt
        }
    }
    var vegCount = selectedVeg.length;                      //setting a var to be the value of however many elements are in the selectedVeg array
    if (vegCount > 1) {                                     //if vegCount is greater than 1
        vegTotal = (vegCount - 1);                          //we will subtract 1 from vegTotal. this is because 1 vegetable topping is free
    } else {                                                //if vegcount is 0 then vegTotal remains 0
        vegTotal = 0;
    }
    runningTotal = (runningTotal + vegTotal);               //new running total value is the old running total plus the vegTotal
    console.log("total selected vegetable items: " + vegCount); 
    console.log(vegCount + " vegetable - 1 free vegetable = " + "$" + vegTotal + ".00");
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal,text1);                         //this calls the getTopping function
};

function getTopping(runningTotal,text1) {                               //this function will check how many toppings have been selected and add them to the total price of the order
    var toppingTotal = 0;                                               //set toppingTotal to 0
    var selectedTopping = [];                                           //create and empty array called selectedTopping
    var toppingArray = document.getElementsByClassName("toppings");     //this var  gets all the elements in the html with the class name "toppings"
    for (var j = 0; j < toppingArray.length; j++) {                     //this for loop will go through the toppingArray to check which toppings have been selected    
        if (toppingArray[j].checked) {                                  //each topping that is selected, we will push the value of that topping to selectedTopping
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";             //then we add the selected toppings to the text1 var
        }
    }
    var toppingCount = selectedTopping.length;                          //setting a var to tbe the value of how many elements are in the selectedTopping array
    if (toppingCount > 1) {                                             //if toppingCount is greater than 1
        toppingTotal = (toppingCount - 1);                              //we will subtract 1 from toppingTotal. this is because 1 topping is free
    } else {                                                            //is toppingCount is 0 then toppingTotal remains 0
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);                       //new running total is the old running total (from the getVegetables function) plus the toppingTotal
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;              //here we display the final text1 to the html element with the id "showText"
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +  //here we show the total which is runningTotal to the html element
        runningTotal + ".00" + "</strong></h3>";                                //with the id "totalPrice"
};
