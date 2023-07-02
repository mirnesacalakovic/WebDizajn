var form = document.getElementById("form");

function Validacija(e){
    e.preventDefault(); //prevent refresh
    const forma = e.target;
    for (let i = 0; i < forma.length - 1; i++) {
        const element = forma[i];
        if(element.name === "firstName"){
            if(!/[a-z]/.test(element.value) && element.value.length <= 15){
                console.log(element.value);
            } else {
                document.getElementById(`${element.name}ErrorText`).style.display="block";
                element.style.borderBottom = "1px solid #DB0000";
                return;
            }
        }
        else if(element.name === "lastName"){
            if(!/[a-z]/.test(element.value) && element.value.length <= 20)
                console.log(element.value);
            else {
                document.getElementById(`${element.name}ErrorText`).style.display="block";
                element.style.borderBottom = "1px solid #DB0000";
                return;
            }
        }
        else if(element.name === "email"){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value))
                console.log(element.value);
            else {
                document.getElementById(`${element.name}ErrorText`).style.display="block";
                element.style.borderBottom = "1px solid #DB0000";
                return;
            }
        }
        else if(element.name === "message"){
            if(/^((?:[A-Z][a-z]+[,]*)\s*(?:[A-Z]*[a-z]+\s*)*[.?!]*[ ]*)+[.?!]$/.test(element.value.trimStart().trim()))
                console.log(element.value);
            else {
                document.getElementById(`${element.name}ErrorText`).style.display="block";
                element.style.border = "1px solid #DB0000";
                return;
            }
        }
    }

    window.location.href="../SuccessPage/Success.html";
}

form.addEventListener("submit", Validacija);

for (let i = 0; i < form.length-1; i++) {
    const formElement = form[i];
    console.log(`${formElement.name}HelperText`);
    formElement.addEventListener("focusin", function(e){
        document.getElementById(`${formElement.name}HelperText`).style.display="block";
        document.getElementById(`${formElement.name}ErrorText`).style.display="none";
        if (formElement.name === "message") {
            e.target.style.border = "1px solid white";
        } else {
            e.target.style.borderBottom = "1px solid white";
        }
    });
    formElement.addEventListener("focusout", function(){
        document.getElementById(`${formElement.name}HelperText`).style.display="none"
    });
}

