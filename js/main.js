$(document).ready(()=>{
    const $logSec =$('#loginSec');
    const $regSec =$('#registerSec');
    
    //login btn
    //hide register section and show login section, make the login button blue and the register button white
    $('#logBtn').on('click', () => {
        $logSec.fadeIn();
        $regSec.hide(); 
        $("#logBtn").removeClass("btn-light").addClass("btn-primary");
        $("#regBtn").removeClass("btn-primary").addClass("btn-light");
   
    });
    
    //register btn
    //show register section and hide login section, make the register button blue and the login button white
    $('#regBtn').on('click', () => {
        $regSec.fadeIn();
        $logSec.hide();
        $("#regBtn").removeClass("btn-light").addClass("btn-primary");
        $("#logBtn").removeClass("btn-primary").addClass("btn-light");
    });
});

function signIn(){
    var signE = document.getElementById('signEmail').value;
    var signP = document.getElementById('signPass').value;

    if(signE == "osmer@admin.com" && signP == "admin123")
        window.location.href = "../home.html"
    else{
        alert("unknown account");
        document.getElementById('signEmail').style.border = "1px solid red";
        document.getElementById('signPass').style.border = "1px solid red";
    }
}

function createAccount(){
    var fieldTr = 0;
    var fields = document.querySelectorAll('.regFormTextBox');
    for(i = 0; i < fields.length; i++){
        if(fields[i].value == ""){
            fields[i].style.border = "1px solid red";
            fieldTr++;
        }
        else
            fields[i].style.border = "1px solid black";
    }

    if(fieldTr == 0)
        window.location.href = "../home.html"
}