document.addEventListener('DOMContentLoaded', ()=>{

    console.log("JS geladen");

const form = document.getElementById('emailForm');
const emailInput = document.getElementById('Email');
const errorMessage =  document.getElementById('validation');


const MailText = document.getElementById('MailText');
const SmallCard = document.querySelector('.SmallCard');
const Card = document.querySelector(".Card");

const DismissButton = document.getElementById("DismissButton");
DismissButton.addEventListener('click',()=>{
    return form.submit();
});

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

        SmallCard.style.display = 'block';
        Card.style.display = 'none';
        MailText.textContent = emailValue;

        setTimeout(()=>{
            console.log("Formular wurde abgesendet mit E-Mail: " +emailValue);
            form.submit();
        }, 5000);
    }
});

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

});


