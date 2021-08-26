document.write(typeof "cheese") //This displays the type of data that's is provided. Here "cheese" is a string so that was will be returned
document.write("15" + 5) //This is an expression that combines the string "15" and the number 5
document.write(5E310) //This will show infinity because the number is too large
document.write(-6E309) //This will show -infinity because the number is negative
document.write(10 > 5) //This is simple boolean logic that shows true
document.write(23 > 24) //Simple boolean logic that shows false
console.log(8 * 24) //This logs 192 of the operation in the console
console.log(4 < 2) //This logs true in the console
document.write(23 == 23) //This is a boolean logic operation that tells if something is equal
document.write(6 == 23) //This operation will show as false
x = 24 //setting values for variables to use === operation
y = 24
document.write(x === y) //=== checks whether two things have the same value AND data type. this will show true
y = "24"
document.write(x === y) //y is the same value but it is now written as a string so it will show false
y = "21"
document.write(x === y) //y is now a different value and a different string so it will show false
y = 23
document.write(x === y) //y is now the same data type but it still has a different value. this will show false
document.write(10 > 5 && 5 > 2) //using the AND operation and getting a true
document.write(10 > 5 && 2 > 5) //using the AND operation and getting a false
document.write(10 > 5 || 2 > 5) //using the OR operation and getting a true
document.write(5 > 10 || 2 > 5) //using the OR operation and getting a false

function not_Function() {                                   //!() determines whether or not something is true by showing the opposite. if something is false we will get true returned and vice versa 
    document.getElementById("not").innerHTML = !(20 > 10);  //this specific function will return a false because 20 > 10 is true
}function not_Function2() {
    document.getElementById("not2").innerHTML = !(23 > 24)  //this specific function will return a true because 23 > 24 is false
}