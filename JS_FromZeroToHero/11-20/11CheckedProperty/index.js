const myCheckBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = () => {
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    } else {
        subResult.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked){
        payResult.textContent = `You are using Visa`;
    } else if(masterCardBtn.checked){
        payResult.textContent = `You are using MasterCard`;
    } else if(payPalBtn.checked){
        payResult.textContent = `You are using PayPal`;
    } else{
        payResult.textContent = `You must select a payment type`;
    }
}