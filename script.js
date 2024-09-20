function changeMainText() {
    // Query to find our element with the correct id.
    const element = document.querySelector("#mainText");

    // if statement to check the texts current state and changes the text value if the statement is correct.
    if (element.innerHTML == "Hello World" ? element.innerHTML = "Goodbye World" : element.innerHTML = "Hello World");

    // Another way to form the if statement, but the function is still the same as the one above

    /* if (element.innerHTML == "Hello World") { 
        element.innerHTML = "Goodbye World";
    } else {
        element.innerHTML = "Hello World";
    }; */

}