const firstName = document.querySelector("#firstName");
firstName.addEventListener("keyup", logLength);

function logLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;
    console.log(valueLength);

    console.log(event.target.value.length);
}
firstName.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;

    if(valueLength > 2) {
        console.log("The input has a value");
    }
    else {
        console.log("The input does not have a value");
    }
}