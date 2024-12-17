function arr(){

let user=prompt("Enter your number")
let ans=''
for (let i = 1; i <=10; ++i) {
    ans=ans+(`${user}*${i}=${user*i}\n`);
}
  alert(ans)
}
arr()