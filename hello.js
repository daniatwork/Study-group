// Danielle Gyory QA Automation Challenge 1
//Program to print name or arg in console 5 times

//define variables and accept input
const args = process.argv
let input = args[2]
let x = 'Danielle'
//run printHelloName
let result = printHelloName(input, x)

//function to decide result; if user input their own name
function printHelloName (a, b) {
  if (a != null) {
    b = a
  }
  return b
}

//print hello + required output 5 times
for (var counter = 1; counter <= 5; counter++) {
  console.log('Hello ' + result)
}
