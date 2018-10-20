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

function erase() {
    var one = document.getElementById("inputOne");
    var two = document.getElementById("inputTwo");
    var answer = document.getElementById("answer");
    var answerItems = document.getElementById("answerItems");
    var pastAnswer = answer.value;
    one.value = '';
    two.value = '';
    answer.value = '';
    var answerList = answerItems.innerHTML;
    answerItems.innerHTML = '<li style= "color: white">' + pastAnswer + '</li>' + answerList;
}