let submitt=()=>{
    let name=document.querySelector("#name").value
    let mobile=document.querySelector("#mobile").value
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
    let confirmpassword=document.querySelector("#confirmpassword").value


    let errorname=document.querySelector("#errorname")
    let errormobile=document.querySelector("#errormobile")
    let erroremail=document.querySelector("#erroremail")
    let errorpassword=document.querySelector("#errorpassword")
    let errorconfirmpassword=document.querySelector("#errorconfirmpassword")



    if (name==="") {
        errorname.innerHTML="Please enter your name"
        errorname.style.color="red"
        return false;
    }

    // if (mobile==="") {
    //     errormobile.innerHTML="Please enter your mobile no"
    //     errormobile.style.color="red"
    //     return false;
    // }

    // if (email==="") {
    //     erroremail.innerHTML="Please enter your email"
    //     erroremail.style.color="red"
    //     return false;
    // }

    // if (password==="") {
    //     errorpassword.innerHTML="Please enter your password"
    //     errorpassword.style.color="red"
    //     return false;
    // }
  
    // if (confirmpassword==="") {
    //     errorconfirmpassword.innerHTML="Please confirm your password"
    //     errorconfirmpassword.style.color="red"
    //     return false;
    // }

    else if(isNaN(mobile)){
        errormobile.innerHTML="Please enter a valid number";
        return false;
      }

      else if(mobile.length!=10){
        errormobile.innerHTML="Please enter a 10 digit number";
        return false;
      }

      else if(!(email.includes('@') && email.includes('.com'))){
        erroremail.innerHTML="Please enter a valid email";
        return false;
      }


      else if(password!=confirmpassword){
        errorconfirmpassword.innerHTML="Password and confirm password should be same";
        return false;
      }


      else if(!(
        password.match(/[1234567890]/) &&
        password.match(/[!@#$%^&*()]/) &&
        password.match(/[a-z]/) &&
        password.match(/[A-Z]/)
      ))
      {
        errorpassword.innerHTML="Password should have at least one uppercase letter, one lowercase letter, one digit"
         return false;
      }

}