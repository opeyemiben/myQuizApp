function calculateFactorial() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        resultElement.textContent = "Please enter a non-negative integer.";
        return;
    }

    function factorialRecursive(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorialRecursive(n - 1);
        }
    }

    const factorial = factorialRecursive(number);
    resultElement.textContent = `Factorial of ${number} is: ${factorial}`;
}