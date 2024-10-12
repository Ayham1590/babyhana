document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ca-button").addEventListener("click", copyCAAddress);
});

function copyCAAddress() {
    var copyText = document.getElementById("ca-button").innerText;


    var tempInput = document.createElement("input");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Address copied: " + copyText);
}
