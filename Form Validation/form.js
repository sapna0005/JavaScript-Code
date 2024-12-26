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

    if (mobile==="") {
        errormobile.innerHTML="Please enter your mobile no"
        errormobile.style.color="red"
        return false;
    }

    if (email==="") {
        erroremail.innerHTML="Please enter your email"
        erroremail.style.color="red"
        return false;
    }

    if (password==="") {
        errorpassword.innerHTML="Please enter your password"
        errorpassword.style.color="red"
        return false;
    }
  
    if (confirmpassword==="") {
        errorconfirmpassword.innerHTML="Please confirm your password"
        errorconfirmpassword.style.color="red"
        return false;
    }

}