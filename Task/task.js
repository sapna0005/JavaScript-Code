
// //   Question
// //   Confirm to Show Message
// //   Ask the user: "Do you like JavaScript?" using confirm.
// //   If they click OK, show an alert with "That's great!".
// //   If they click Cancel, show an alert with "No worries, keep learning!".

   
// //Answer  
//    let a=confirm("Do you like JavaScript")
//     if (a==true) {
//         alert("That's great!")
//     }
//     else{
//         alert("No worries, keep learning!")
//     }

      let btn=document.querySelector("#okk")
      btn.addEventListener("click",()=>{
      alert("button clicked")
      })

      let imp=document.querySelector("#imp")
      imp.addEventListener("keydown",(e)=>{
      console.log(e.key)})