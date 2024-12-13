
function positive(){


let number=prompt("enter your number")
     number=parseInt(number)
    
    if(number>0)
    {
         alert("This is positive number");
     }
     else if(number<0)
     {
         alert("This is negative number");
     }
     else{
         alert("This is zero");
     }
}
positive()