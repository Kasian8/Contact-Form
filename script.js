const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const eMail=document.getElementById("eMail");
const queryType=document.querySelectorAll("input[name='queryType']");
const message=document.getElementById("message");
const checkTerms=document.getElementById("checkTerms");
const submitBtn=document.getElementById("submitBtn")
const popupMessage=document.querySelector(".popupMessage")


function validateFirstName(){
    if(firstName.value.trim()===""){
        firstName.classList.add("alertRedBorder")
        document.querySelector(".alertFn").style.display="block";
        return false;
    }
    else{
        firstName.classList.remove("alertRedBorder");
        document.querySelector(".alertFn").style.display="none";
        return true;
    }
}

function validateLastName(){
    if(lastName.value.trim()===""){
        lastName.classList.add("alertRedBorder");
        document.querySelector(".alertLn").style.display="block";
        return false;
    }
    else{
        lastName.classList.remove("alertRedBorder");
        document.querySelector(".alertLn").style.display="none";
        return true;
    }
}

function validateE_Mail(){
    const email=eMail.value.trim();

        if(email===""){
            eMail.classList.add("alertRedBorder");
            document.querySelector(".alertEm").style.display="block";
            return false;
        }
        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            eMail.classList.add("alertRedBorder");
            document.querySelector(".alertEm").style.display="block";
            return false;
        }
    
        eMail.classList.remove("alertRedBorder");
        document.querySelector(".alertEm").style.display="none";
        return true;
}

function validateQueryType(){
    let ck=false;
    queryType.forEach((radio)=>{
        if(radio.checked){
            ck=true;
        }
    })
    if(!ck){
        document.querySelector(".alertCk").style.display="block"
        return false
    }
    document.querySelector(".alertCk").style.display="none";
    return true;
}

function validateMessage(){
    if(message.value.trim()===""){
        message.classList.add("alertRedBorder");
        document.querySelector(".alertTxt").style.display="block";
        return false;
    }
    message.classList.remove("alertRedBorder");
    document.querySelector(".alertTxt").style.display="none";
    return true;
}

function validateTerms() {
    if (!checkTerms.checked) {
        document.querySelector(".alertTerms").style.display = "block";
        return false;
    }
    
    document.querySelector(".alertTerms").style.display = "none";
    return true;
}
function popUp(){
    let pop=document.querySelector(".popupMessage");

    pop.classList.remove("show");

    setTimeout(()=>{
        pop.classList.add("show");
    },10);

    setTimeout(()=>{
        pop.classList.remove("show");
    },3000);
}



submitBtn.addEventListener("click",function(event){
    event.preventDefault();

    const isValidFirstName=validateFirstName();
    const isValidLastName=validateLastName();
    const isValidEmail=validateE_Mail();
    const isValidQueryType=validateQueryType();
    const isValidMessage=validateMessage();
    const isValidTerms=validateTerms();

    if(isValidFirstName && isValidLastName && isValidEmail && isValidQueryType && isValidMessage && isValidTerms){
        popUp();
        document.querySelector("form").reset();
    }
})

