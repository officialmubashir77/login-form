let titleh1 = document.getElementById("title");
let nameField = document.getElementById("nameField");
let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click" , function(event){
    event.preventDefault() ;
})

signupBtn.onclick = () => {
    titleh1.innerHTML = "Sign Up";
    nameField.style.display = "block" ;
    

}

loginBtn.onclick = () => {

    titleh1.innerHTML = "Login" ;
    nameField.style.display = "none" ;    
}

