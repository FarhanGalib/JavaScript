const form =  document.querySelector("#form");
const message = document.querySelector("#message");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

let isValid=false;
let passwordMatch=false;

function formValidation(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent="Please fill up all field.";
        message.style.color="red";
    }
    else{
        if(password1.value===password2.value){
            passwordMatch=true;
            message.textContent="Successfully Registered!!!"
            message.style.color="green";

            password1.style.color="green";
            password2.style.color="green";
        }
        else{
            passwordMatch=false;
            message.textContent="Make sure password match.";
            message.style.color="red";

            password1.style.borderColor="red";
            password2.style.borderColor="red";
        }
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    formValidation();
});
