let inputs = document.querySelectorAll("input:not(:last-child)")
inputs.forEach(e => {
    e.addEventListener("click", _ => {
        e.parentElement.style.height = "30px"
    })

})
let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
document.getElementById("submit").onclick = e => {
    if (userEmail.value == "" && userPassword.value == "") {
        alert("fill the fild")
    } else {
        login(userEmail.value, userPassword.value)
    }
}
console.log()
function login(email, pass) {
    axios.post("https://reqres.in/api/login", {

        "email": email,
        "password": pass

    }).then(response => {
        if (response.data.token.length >= 1) {
            // window.location.replace("https://www.bing.com/search?pglt=161&q=axios+post+request&cvid=3fd56c50cd8c487a9da40fd8ed358129&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARBFGDkyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQNIBCDk2NjJqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531")
            if(response.data.token){
                window.location.assign("dascborad.html")
            }
            localStorage.setItem("tock",response.data.token)
        }

    }).catch(error=>{
        alert("sorry " + error.response.data.error)
    })
}
