document.getElementById("cashout-btn").addEventListener("click", function(){
    const agentNumber = document.getElementById("cashout-number").value;
    if(agentNumber.length !== 11){
        alert("Invalid number. Please enter an 11-digit number.");
        return;
    }
    console.log(agentNumber);

    const amount = document.getElementById("cashout-amount").value;
    console.log(amount);

    const balance = document.getElementById("balance").innerText;
    console.log(balance);

    const pin = document.getElementById("cashout-pin").value;
    console.log(pin);

    const newbalance = Number(balance) - Number(amount);
    

    if(newbalance < 0){
        alert("Insufficient balance. Please try again.");
    }
    

    if(pin === "1234"){
        alert("Cashout Successful!");
        document.getElementById("balance").innerText = newbalance;
        console.log(newbalance);

    }
    else{
        alert("Invalid PIN. Please try again.");
        return;
    }

    })