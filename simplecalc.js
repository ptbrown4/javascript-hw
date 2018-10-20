function compute() {
    var one = parseFloat(document.getElementById("inputOne").value);
    var two = parseFloat(document.getElementById("inputTwo").value);
    var sign = document.getElementById("operations").value;
    
    if (sign === "+") {
        document.getElementById("answer").value = one + two;
    } else if (sign === "-") {
        document.getElementById("answer").value = one - two;
    } else if (sign === "*") {
        document.getElementById("answer").value = one * two;
    } else if (sign === "/") {
        document.getElementById("answer").value = one / two;
    }
}