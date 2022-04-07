// Display values
const inputEl = document.getElementById("input-el")
inputEl.value = ''
// Function to verify the expression inside the input
function verifyingExpression(input){
    const regex =  /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/g
    if(regex.test(input)){
        console.log(true)
    }
}

// function deleteLastDigit(string){
//     let myArray = string.split('')
//     myArray.pop()
//     string = myArray.join('')
//     return string
// }

// Numbers, operators, etc
const rest = document.getElementById("rest")
const ce = document.getElementById("ce")
const c = document.getElementById("c")
const del = document.getElementById("delete")

const onedivx = document.getElementById("onedivx")
const quadrado = document.getElementById("quadrado")
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

const moreOrLes = document.getElementById("moreOrLess")
const zero = document.getElementById("zero")
const comma = document.getElementById("comma")
const equal = document.getElementById("equal")
// Verifying the input


// Adding Event Listeners to buttons
// ---------------------------------------
// Numbers
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
    inputEl.value += "."
})

rest.addEventListener('click', function(){
    inputEl.value += "%"
})

equal.addEventListener('click', function(){
    verifyingExpression(inputEl.value)
})

c.addEventListener('click', function(){
    inputEl.value = ''
})

del.addEventListener('click', function(){
    let lenOfString = inputEl.value.length
    inputEl.value = inputEl.value.slice(0, lenOfString-1)
})