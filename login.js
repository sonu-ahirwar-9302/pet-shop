let username=["atul","prashant","sunil"];
let password=[123,345,654];
function login_user(){
 var name=document.f1.name.value;
 var psw1=document.f1.psw.value;
 for(let val in username ){
     if(name==username[val] &&  psw1==password[val])
     {
         // document.write("login");
         window.open("index.html")
         break;
     }
     else{
         document.write("invelid login");
         break;
     }
    

 }
 

}