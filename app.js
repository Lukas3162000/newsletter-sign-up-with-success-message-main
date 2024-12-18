document.addEventListener('DOMContentLoaded', ()=>{

    console.log("JS geladen");

const form = document.getElementById('emailForm');
const emailInput = document.getElementById('Email');
const errorMessage =  document.getElementById('validation');

form.addEventListener("submit", (e) =>{
    console.log("Submit ausgeführt");
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if(!isValidEmail(emailValue)){
        console.log("Ungültige Klasse erkannt");
        emailInput.classList.add("EmailFail");
        emailInput.classList.remove("Email");
        errorMessage.style.display = "block";
    } else {
        //Hier kommt dann auch die Logik fürs weiterleiten rein,
        //Da wird die normale Card ausgeblendet & die kleine Card eingeblendet oder so

        console.log("Gültige Klasse erkannt");

        emailInput.classList.remove("EmailFail");
        emailInput.classList.add("Email");
        errorMessage.style.display = "none";

        console.log("Formular wurde abgesendet mit E-Mail: " +emailValue);
        form.submit();
    }
});

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

});


