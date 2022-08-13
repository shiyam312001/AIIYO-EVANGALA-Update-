function Validateform() {
    var email = document.form.email.value;
    var password = document.form.password.value;

    if (email = "") {
        alert("Please Fill Email");
        return false;
    } else if (password.length < 6) {
        alert("Password Must be Contain 6 letter")
        return false;
    }
}


confirm("HI AIIYO EVANGALA GUYS");