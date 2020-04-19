


function validate(){
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let age = document.getElementById('age');
    let mobile = document.getElementById('mobile');


    if(name.value =="" || password.value =="" ||password.value =="" || confirmPassword.value =="" ||age.value == "" ||mobile.value ==""){
       alert("no blancks value are alllowed");
       return false;
    }
    else if(password.value != confirmPassword.value){
        alert('password does not match');
        return false;
    }
    else if(age.value<12 || age.value> 50){
         alert('Age should be in between 12 and 50');
         return false;
    }
    else if(mobile.value.length<10 || mobile.value.length> 10){
        alert('invalid mobile no');
        return false;
    }
    else{
        return true;
    }
}



