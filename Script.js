function checkPassword() {
    let password = document.getElementById("password").value;

    if (password.length < 8) {
        document.getElementById("result").innerText = "Weak Password";
    } else {
        document.getElementById("result").innerText = "Strong Password";
    }
}
