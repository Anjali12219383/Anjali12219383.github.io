const loginForm=()=>{
    const str=`
    <h3>Login Form</h3>
    <p><button onclick="showHome()">submit</button></p>
    <p><button onclick="registerForm()">Create Account</button></p>
    `
    root.innerHTML=str+ "</div>";
}

const registerForm=()=>{
     const str=`
    <h3>registration Form</h3>
    <p><button onclick="loginForm()">submit</button></p>
    <p><button onclick="loginForm()">already member?login here</button></p>
    `
    root.innerHTML=str+"</div>";
}

const showHome=()=>{
     const str=`
    <h3>welcome</h3>
    <p><button onclick="loginForm()">logout</button></p>
    `
    root.innerHTML=str+"</div>";
}