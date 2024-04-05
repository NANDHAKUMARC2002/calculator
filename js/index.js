const button =document.getElementById("button")
const iframe =document.getElementById("iframe")

 button.addEventListener('dblclick',function(){
     iframe.src="https://zercorp.com/" 
 })



 let output=document.getElementById('output')

 function  display(num){
    output.value+=num;
 }

 function equal(){
    output.value=eval(output.value);
 }

 function Clear(){
    output.value="";
 }

 function del(){
    output.value=output.value.slice(0,-1);
 }
 




// function form(){
// let password=document.getElementById('password').value
// let confirmpassword=document.getElementById('confirmpassword').value
// let incorrect=document.getElementById('incorrect')

// if(password!=confirmpassword){
//    incorrect.innerHTML="<p> password doesn't match</p>"
// }
// return false;
// }