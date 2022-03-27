

function GenerateTable() {

    var tblNumber = document.getElementById('tbtNumber'); let text = tblNumber.value;
    var warning = document.getElementById('warning'); warning.style.visibility = "collapse";
    var tblrow = document.getElementById("genInfo"); tblrow.style.visibility = "collapse";

    if (tblNumber.value == "") {
        warning.style.visibility = "visible";
        warning.innerHTML = "Please enter a number.";
        tblNumber.focus();
        return;
    }
    if (isNaN(text) || tblNumber.value == "0") {
        warning.style.visibility = "visible";
        warning.innerHTML = "Please enter a valid number.";
        tblNumber.value = ""; tblNumber.focus();
        return;
    }

    tblrow.style.visibility = "visible";
    for (var i = 1; i <= 10; i++) {
        tblrow.rows[i].cells[0].innerHTML = tblNumber.value;
        tblrow.rows[i].cells[2].innerHTML = i;
        tblrow.rows[i].cells[4].innerHTML = (tblNumber.value * i)
    }
}


function GetPOW(power) {
    var tblNumber = document.getElementById('tblNumber'); let text = tblNumber.value;
    var warning = document.getElementById('warning'); warning.style.visibility = "collapse";
    var result = document.getElementById('result'); result.innerHTML = "";

    if (tblNumber.value == "") {
        warning.style.visibility = "visible";
        warning.innerHTML = "Please enter a number.";
        tblNumber.focus();
        return;
    }
    if (isNaN(text) || tblNumber.value == "0") {
        warning.style.visibility = "visible";
        warning.innerHTML = "Please enter a valid number.";
        tblNumber.value = ""; tblNumber.focus();
        return;
    }

    if(power==2)
        result.innerHTML = "Square of " + text + " : <br/>" + text + " X " + text + " = " + Math.pow(text, power);
    else if(power==3)
        result.innerHTML = "Cube of " + text + " : <br/> " + text + " X " + text + " X " + text + " = " + Math.pow(text, power);
}

function GetPOWs(power, listNumber) {
    var tbl = document.getElementById("genInfo"); tbl.style.visibility = "visible";

    for (var i = tbl.rows.length; i > 1; i--) {
        tbl.deleteRow(i - 1);
    }

    for (var i = 1; i <= listNumber; i++) {
        tbl.insertRow(i);
        for (var j = 0; j <= (power==2?4:6); j++) {
            tbl.rows[i].insertCell(j);
        }

        
        tbl.rows[i].cells[0].innerHTML = i;
        tbl.rows[i].cells[1].innerHTML = " X ";
        tbl.rows[i].cells[2].innerHTML = i;
        tbl.rows[i].cells[3].innerHTML = " = ";
        tbl.rows[i].cells[4].innerHTML = Math.pow(i, power);
        if(power==3){
            tbl.rows[i].cells[3].innerHTML = " X ";
            tbl.rows[i].cells[4].innerHTML = i;
            tbl.rows[i].cells[5].innerHTML = " = ";
            tbl.rows[i].cells[6].innerHTML = Math.pow(i, power); 
        }
        
    }
}


function GetFactorial(){
    var tblNumber = document.getElementById('tblNumber'); let text = tblNumber.value;
    var warning = document.getElementById('warning'); warning.style.visibility = "collapse";
    var result = document.getElementById('result'); result.innerHTML = "";

    if (text == "") {
        warning.style.visibility = "visible";
        warning.innerHTML = "Please enter a number.";
        tblNumber.focus();
        return;
    }
    if(text == "0"){
        result.innerHTML="The factorial of 0 is 1";
        return;
    }
    if (isNaN(text)) {
        warning.style.visibility = "visible";
        warning.innerHTML = "Please enter a valid number.";
        tblNumber.value = ""; tblNumber.focus();
        return;
    }
    
    if(text == "1"){
        result.innerHTML="The factorial of 1 is 1";
        return;
    }
    let str="";
    for(var i = text; i >= 1; i--){
        str+=i;
        if(i!=1) str+=" X ";
    }
    result.innerHTML="The factorial of "+text+" : <br/>"+str+" = "+factorial(text);


}

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

function ListFactorial(number){
    var tbl = document.getElementById("genInfo"); tbl.style.visibility = "visible";

    for (var i = tbl.rows.length; i > 1; i--) {
        tbl.deleteRow(i - 1);
    }

    for (var i = 1; i <= number+1; i++) {
        tbl.insertRow(i);
        for (var j = 0; j <=1; j++) {
            tbl.rows[i].insertCell(j);
        }

        let str = "";
        for (var k = i-1; k >= 0; k--) {
            str += k;
            if (k == 1 || k==0) break;
            if (k != 1 && k!=0) str += " X ";
        }
        
        tbl.rows[i].cells[0].innerHTML = str+" = ";
        tbl.rows[i].cells[1].innerHTML = factorial(i-1);
    }
}