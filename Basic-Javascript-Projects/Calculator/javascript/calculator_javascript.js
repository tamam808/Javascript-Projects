const Calculator = { //creates an object to keep track of values
    Display_Value: '0', //this displays 0 on the screen
    First_Operand: null, //this will hold the first operand for any expressions, we set it to null for now
    Wait_Second_Operand: false, //this checks whether or not the second operand had been input
    operator: null, //this will hold the operator, we set it to null for now
};

function Input_Digit(digit) { //this modifies values each time a button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator; //we are checking to see if wait_second_operand is true and set
    if (Wait_Second_Operand === true) {                        //display_value to the key that was clicked 
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {                                                   //this overwrites display_value if the current value is 0 otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {   //this section handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;    //this ensures that accidental clicking of the decimal point
    if (!Calculator.Display_Value.includes(dot)) {          //doesn't cause bugs in your operation
        Calculator.Display_Value += dot;                    //we are sayting that if the display_value does not contain a decimal point
    }                                                       //we want to add a decimal point
}

function Handle_Operator(Next_Operator) { //this section handles operators
    const { First_Operand, Display_Value, operator } = Calculator   //when an operator key is pressed we convert the number
    const Value_of_Input = parseFloat(Display_Value);               //displayed on screen to a number and then store the result in
    if (operator && Calculator.Wait_Second_Operand) {               //calculator.first_operand if it doesn't alraedy exist
        Calculator.operator = Next_Operator;        //checks if an operator already exists and if wait_second_operand is true,
        return;                                     //then updates the operator and exits from function
    }
    if (First_Operand == null) {                    
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {                      //checks if an operator alraedy exists
        const Value_Now = First_Operand || 0;                                   //if operator exists property lookup is performed for the operator
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input); //in the perform_calculation object and the function that matches the
                                                                                //operator is executed        
        result = Number(result).toFixed(9)              //here we add a fixed amount of numbers after the decimal
        result = (result * 1).toString()                //this will remove any trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { //this function updates the screen with the contents of display_value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys'); //this section monitors button clicks
keys.addEventListener('click', (event) => { //the target varuavke us an object that represents the element
    const { target } = event;               //that was clicked
    if (!target.matches('button')) {    //if the element that was clicked on is not a button, exit the function
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) { //ensures that AC clears the numbers fromt the calculator
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})