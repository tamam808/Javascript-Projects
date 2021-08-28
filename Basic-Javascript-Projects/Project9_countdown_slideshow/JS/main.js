function countdown() {  //This function will cause a countdown to occur and alert the browser when the timer hits 0
    var seconds = document.getElementById("seconds").value; //this sets the variable "seconds" to the value of the element in html with the id "seconds". 
                                                            //this allows the user to input their own value and the clock will run from there to 0 
    function tick() {   //This function is what causes the timer to tick towards 0
        seconds = seconds -1;   //here we set the new value of "seconds" which we grabbed from the parent function, and then we -1 from that value
        timer.innerHTML = seconds;  
        var time = setTimeout(tick, 1000); //this is a method to call a funciton and do it every 1000ms (or 1 sec)
        if (seconds == -1) {               //this if statement is saying that if the value of seconds is equal to -1 then it will alert the browser  
            alert("Time's up!")
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1      //setting the global variable slideIndex to 1
showSlides(slideIndex); //giving showSlides slideIndex as an argument

function plusSlides(n) {    //this function uses the parameter n which we give it in the html when we call it
    showSlides(slideIndex += n); //this line then sets slideIndex, which is currently 1, to + the argument given and then equal that
}

function currentSlide(n) {  //this function uses the parameter n which we pass it in the html when we call it
    showSlides(slideIndex = n); //this line sets the slideIndex to = the argument we pass it when we called it
}

function showSlides(n) {                                        //This function is the subprogram that the above functions call
    var i;                                                      //here we state var i exists
    var slides = document.getElementsByClassName("mySlides");   //here we set slides as a container to hold all elements with the class name "mySlides"
    var dots = document.getElementsByClassName("dot");          //here we set dots as a container to hold all elements witht the class name "dot"
    if (n > slides.length) {slideIndex = 1}                     //this if statement says that if the argument provided is greater than the length of slides then we set the slideIndex to 1
    if (n < 1) {slideIndex = slides.length}                     //this if statement say that is the argument provided is less than 1 then we set the slideIndex equal to the length of slides
    for (i = 0; i < slides.length; i++) {                       //this for loop assigns i the value of 0, and if i < the length of slides it will set the slide at the index position given to be hidden
        slides[i].style.display = "none";                       //once the iteration of the loop completes it will ad 1 to the value of 1 and then run through the loop again until the condition is false
    }
    for (i = 0; i < dots.length; i++) {                         //this for loop sets the value of i to 0, and if i is < the length of dots it will set the dot at the index position provided
        dots[i].className = dots[i].className.replace(" active", ""); //to change its background color which will show it as active to the user
    }
    slides[slideIndex-1].style.display = "block";               //this line will change the displayed style to block of the slide at the index [slideIndex-1]
    dots[slideIndex-1].className += " active";                  //this line will add the word active to the class name of the dot at the index [slideIndex-1]
}