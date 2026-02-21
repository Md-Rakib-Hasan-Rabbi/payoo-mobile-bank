const button = document.getElementById("login-btn").addEventListener("click", function(){
    const number = document.getElementById("input-number").value;
    console.log(number);

    const pin = document.getElementById("input-pin").value;
    console.log(pin);

    if(number === "01234567890" && pin === "1234"){
        alert("Login successful!");
        window.location.assign("./home.html");
    } else {
        alert("Invalid number or PIN. Please try again.");
    }
})
