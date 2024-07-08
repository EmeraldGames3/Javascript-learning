function calculate() {
    const totalAmount = document.getElementById("total-amount");
    const princpalInput = document.getElementById("princpal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let princpal = Number(princpalInput.value);
    let rate = Number(rateInput.value) / 100;
    let years = Number(yearsInput.value);

    if(isNaN(princpal)) {
        princpal = 0;
        princpalInput.value = 0
    }
    if(isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }
    if(isNaN(years)) {
        years = 0;
        yearsInput.value
    }

    const result = princpal * Math.pow((1 + rate / 1), 1* years);

    totalAmount.textContent = result.toLocaleString(
        undefined, {
            style:"currency",
            currency: "USD"
        });
}