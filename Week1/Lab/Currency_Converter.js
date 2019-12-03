
//Hàm này được gọi khi các thẻ HTML trong body load xong -> dùng event onload
function SetupEvent() {
    let button = document.getElementById("btnConvert");
    // button.onclick=ConvertToVnd;
    button.addEventListener("click", ConvertToVnd);
}

function ConvertToVnd() {
    let conversionUsd = 23262;
    let conversionEur = 25327;
    let valueText = document.getElementById("amount").value;
    let conversion;
    let vndAmount;

    if (CheckRadioChecked("usd"))
        //conversion = conversionUsd;
        callApi('USD');
    else
        //conversion = conversionEur;
        callApi('EUR');

    vndAmount = conversion * valueText;
    document.getElementById("result").innerHTML = valueText + " USD is " + vndAmount + " VNĐ";
}
function CheckRadioChecked(idRadio) {
    return document.getElementById(idRadio).checked;
}
function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://free.currencyconverterapi.com/api/v6/convert?q=' + currency + '_VND&compact=y');
    xhr.onload = function () {
        if (xhr.status === 200) {
            updateResults(JSON.parse(xhr.responseText));
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function updateResults(response) {
    console.log(response);
}