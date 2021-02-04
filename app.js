const $onlySpans = document.querySelectorAll("span")
const $documentScreen = document.getElementById("screen")
$onlySpans.forEach( span => {
    span.addEventListener( "click", buttonActions )
})
function buttonActions(event) {
    clickOperand(event)
}
function clickOperand(event) {
    const operandValue = event.target.innerText
    if ( operandValue === "C" ) {
        $documentScreen.textContent = ""
    } else if ( operandValue === "=" ) {
        calculateValue()  
    } else {
        $documentScreen.append( operandValue )
    }
}
function calculateValue() {
    equationString = $documentScreen.innerText
    equation = equationString.split("+");
    const additionTotaler = (sum, element) => +sum + +element
    const substractionTotaler = (difference, element) => +difference - +element
    const multiplicationTotaler = (product, element) => +product * +element
    const divisionTotaler = (quotient, element) => +quotient / +element
    const solution = equation.reduce(additionTotaler)
    $documentScreen.innerText = solution
}
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));