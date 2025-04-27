function appendValue (value) {
    document.getElementById('display').value += value;
}

function clearDisplay () {
    document.getElementById('display').value = '';
}

function calculate () {
    const display = document.getElementsById('display');
        try {
        display.value = eval(display.value);
        } catch {
        display.value = "Error";
        }
}

// function calculate () {
//     const display = document.getElementById('display');
//     const  result = document.getElementById('result');
//     try {
//         display.value = eval(display.value)
//     } catch {
//         display.value = 'Error';
//         }
// }

