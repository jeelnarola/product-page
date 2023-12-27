let tokenname = document.cookie + "username"

// console.log(token);

let token = document.cookie

let jabar = token.split("=")
document.getElementById("name").innerHTML = jabar[1] 

if(token){
    document.getElementById("signup").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("name").style.display="block";
    document.getElementById("logout").style.display="block";
}
else{
    document.getElementById("signup").style.display="block";
    document.getElementById("login").style.display="block";
    document.getElementById("name").style.display="none";
    document.getElementById("logout").style.display="none";
    
}
console.log(token);
let logout = jabar[0];
document.getElementById("logout").addEventListener("click",()=>{
    //  document.cookies.remove(token)
    document.Cookie =  logout + ` path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT `
    location.reload()

})
