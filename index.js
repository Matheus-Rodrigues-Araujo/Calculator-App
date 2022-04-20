// Variable responsible for the input element, through the 'getElementById()' method
const inputEl = document.getElementById("input-el")
inputEl.value = ''

// Function that will look for square roots in the input field and replace them for their value
function findSquareRoot(exp){
    const regex = /√\d+/g
    if(regex.test(exp)){
        // Store the square roots of the string in the 'sqrRoot' array
        let sqrRoot = exp.match(regex)
        // At each loop, this variable will receive the values of the 'sqrRoot' array and will
        // replace the original value with a new one, which is precisely the value of the square
        // root of the number.
        let getCurrentSqrt;
        for (let i in sqrRoot){
            getCurrentSqrt = sqrRoot[i]
            // Replacing the original value(s) with a new one
            exp = exp.replace(getCurrentSqrt, Math.sqrt(Number(getCurrentSqrt.slice(1,))))
        }
        // And finally, the string passed as an argument returns as a value to be passed to the
        // 'eval()' method, and thus generate the result of the mathematical expression.
        return exp
    }
    return exp
}
// Function 'calculateFactorial' will calculate the factorial of a value.
// The "find factorial" function will call the "calculateFactorial" function
// to return the result of the factorial. Therefore, the function 'calculateFactorial'
// acts as an helper function
function calculateFactorial(value){
    let cont = value -1
    for(let i = cont; i>=1; i-=1){value*=i}
    return String(value)
}

// Function 'findFactorial' will find all factorials of the input field,
// and that will pass each value to the 'calculate Factorial' function,
// which will return the value of the factorial.
function findFactorial(inputEl){
    const regex = /\d+!/g
    let facArray;
    if(regex.test(inputEl)){
        facArray = inputEl.match(regex)
        for(let i in facArray){
            let originalStringValue = facArray[i]
            let numberValue = Number(facArray[i].slice(0,facArray[i].length-1))
            inputEl = inputEl.replace(originalStringValue, calculateFactorial(numberValue))
        }
        return inputEl
    }
    return inputEl
}
// This function replaces the letter 'x', the special character "²" and the comma(s)
function replaceSymbols(string){
    string = string.replace(/,/g,".")
    string = string.replace(/x/g, "*")
    string = string.replace(/²/g, "**2")
    return string
}

// Numbers, operators, etc
const rest = document.getElementById("rest")
// The "CE" button doesn't work yet'
const factorial = document.getElementById("factorial")
const c = document.getElementById("c")
const del = document.getElementById("delete")

const parenthesis1 = document.getElementById("parenthesis1")
const parenthesis2 = document.getElementById("parenthesis2")
const exponent = document.getElementById("exponent")
const squareRoot = document.getElementById("squareRoot")
const div = document.getElementById("division")


const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const multiply = document.getElementById("multiply")

const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const subtract = document.getElementById("subtract")

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const sum = document.getElementById("sum")

const zero = document.getElementById("zero")
const comma = document.getElementById("comma")
const equal = document.getElementById("equal")

// Adding Event Listeners to buttons
// ---------------------------------------
// Numbers
zero.addEventListener('click', function(){
    inputEl.value += 0
})
one.addEventListener('click', function(){
    inputEl.value += 1
})
two.addEventListener('click', function(){
    inputEl.value += 2
})
three.addEventListener('click', function(){
    inputEl.value += 3
})
four.addEventListener('click', function(){
    inputEl.value += 4
})
five.addEventListener('click', function(){
    inputEl.value += 5
})
six.addEventListener('click', function(){
    inputEl.value += 6
})
seven.addEventListener('click', function(){
    inputEl.value += 7
})
eight.addEventListener('click', function(){
    inputEl.value += 8
})
nine.addEventListener('click', function(){
    inputEl.value += 9
})
// ---------------------------------------------
// Operators and Functions
sum.addEventListener('click', function(){
    inputEl.value += "+"
})
subtract.addEventListener('click', function(){
    inputEl.value += "-"

})
multiply.addEventListener('click', function(){
    inputEl.value += "x"
})
div.addEventListener('click', function(){
    inputEl.value += "/"
})

comma.addEventListener('click', function(){
    inputEl.value += ","
})

parenthesis1.addEventListener('click', function(){
    inputEl.value +='('}
)
parenthesis2.addEventListener('click', function(){
    inputEl.value +=')'}
)
// function should be improved, doesn't work in all cases
exponent.addEventListener('click', function(){
    inputEl.value += '²'
})

squareRoot.addEventListener('click', function(){
    inputEl.value += '√'
})

rest.addEventListener('click', function(){
    inputEl.value += "%"
})

// When the "equals button" is pressed, the expression inside the input field will be calculated.
// Just pass the value of the "inputEl" variable as an argument inside the "eval()" method. 
// As "inputEl.value" is a string, after it is passed as an argument in the quoted method,
// the result of the math expression will be shown in that same input field.

equal.addEventListener('click', function(){
    inputEl.value = findSquareRoot(inputEl.value)
    inputEl.value = findFactorial(inputEl.value)
    inputEl.value = replaceSymbols(inputEl.value)
    inputEl.value = eval(inputEl.value)
    inputEl.value = inputEl.value.replace(".",",")
})
//-------------------------------------------------------
c.addEventListener('click', function(){
    inputEl.value = ''
})

factorial.addEventListener('click', function(){
    inputEl.value+= "!"
})

del.addEventListener('click', function(){
    let lenOfString = inputEl.value.length
    inputEl.value = inputEl.value.slice(0, lenOfString-1)
})
