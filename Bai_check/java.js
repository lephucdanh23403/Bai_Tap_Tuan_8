function kiemtraso() {
    var input = document.getElementById("input-number").value;
    var regex = /^\d+$/;
    var result = "";
    if (regex.test(input)) {
        result = "TRUE";
    } else {
        result = "FALSE";
    }
    document.getElementById("result-number").innerHTML = result;
}

function kiemtraname() {
    var input_name = document.getElementById("input-name").value;
    var regexname = /^[\p{Lu}\p{Ll}\s\p{P}]+$/u;
    var resultname = "";
    if (regexname.test(input_name)) {
        resultname = "TRUE";
    } else {
        resultname = "FALSE";
    }
    document.getElementById("result-name").innerHTML = resultname;
}

function kiemtraphone() {
    var input_phone = document.getElementById("input-phone").value;
    var regexphone = /^\d{10}$/;
    var resultphone = "";
    if (regexphone.test(input_phone)) {
        resultphone = "TRUE"
    } else {
        resultphone = "FALSE"
    }
    document.getElementById("result-phone").innerHTML = resultphone;
}