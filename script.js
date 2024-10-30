document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;
    let errorMessage = "";
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("genderError").innerText = "";

    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").innerText = "You must fill with your name!";
        isValid = false;
    }

    const email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("emailError").innerText = "You must fill with your email!";
        isValid = false;
    }

    const age = document.getElementById("age").value;
    if (age === "" || age < 17 || age > 99) {
        document.getElementById("ageError").innerText = "You're too young!";
        isValid = false;
    }

    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    if (!genderMale && !genderFemale) {
        document.getElementById("genderError").innerText = "Please choose one!";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
