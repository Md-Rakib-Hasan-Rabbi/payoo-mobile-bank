document.getElementById("cashout-btn").addEventListener("click", function () {
  const agentNumber = getValue("cashout-number");
  if (agentNumber.length !== 11) {
    alert("Invalid number. Please enter an 11-digit number.");
    return;
  }
  const amount = getValue("cashout-amount");
  const pin = document.getElementById("cashout-pin").value;
  const balance = document.getElementById("balance").innerText;

  const newbalance = Number(balance) - Number(amount);
  if (newbalance < 0) {
    alert("Insufficient balance. Please try again.");
  }

  if (pin === "1234") {
    alert("Cashout Successful!");
    document.getElementById("balance").innerText = newbalance;
  } else {
    alert("Invalid PIN. Please try again.");
    return;
  }
});


