function compute() {
    var one = parseInt(document.getElementById("inputOne").value);
    var two = parseInt(document.getElementById("inputTwo").value);
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