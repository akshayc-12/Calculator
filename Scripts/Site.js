
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

