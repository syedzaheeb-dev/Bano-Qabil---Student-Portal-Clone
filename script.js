const studentID = document.getElementById("student_id")
const Pin = document.getElementById("pin")

const demoAccount = {
    ID: 12345,
    pin: 4321
}

const buttonClick = document.getElementById("id_check")

buttonClick.addEventListener("click", () => {

    const idInputValue = studentID.value.trim();
    const pinInputValue = Pin.value.trim();

    if (idInputValue.length !== 5 || pinInputValue.length !== 4) {
        alert("Id should be 5 Digits and Pin Should be 4 Digits");
    } else if (idInputValue != demoAccount.ID || pinInputValue != demoAccount.pin) {
        alert("ID or Pin is Incorrect");
    } else {
        window.location.href = "../home/home.html";
    }

})

