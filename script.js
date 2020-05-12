
let user_select = document.querySelector("#username");
let username = user_select.value;
let select_password = document.querySelector("#password");
let password = select_password.value;

// username.value = "Academy";
// password.value = "seven"
console.log(username);
console.log(password);






function verify(){
    if (username === "Academy"&& password === "seven"){
        let dataresult = document.querySelector('.result');
        dataresult.innerHTML = "welcome you are logged in as admin"
    }
    else if (username === "Academy"&& password !== "seven"){
        let dataresult = document.querySelector('.result');
        dataresult.innerHTML = "Wrong password. Please verify and try again"
        dataresult = dateresult.innerHTML;
        dataresult.style.color = red;
    }
    else if (username !== "Academy"&& password === "seven"){
        let dataresult = document.querySelector('.result');
        dataresult.innerHTML = "Wrong Username. Please verify and try again"
    }
    else if (username !== "Academy"&& password !== "seven"){
        let dataresult = document.querySelector('.result');
        dataresult.innerHTML = "Wrong password and Username. Please verify and try again"
    }
    else if (username === null|| password == undefined){
        let dataresult = document.querySelector('.result');
        dataresult.innerHTML = "Wrong password. Please verify and try again"
    }
}
verify()

