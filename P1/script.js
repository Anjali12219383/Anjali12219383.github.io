const loginForm=()=>{
    const str=`
    <h3>Login Form</h3>
    <label for="email">Email:</label>
    <input type="email" placeholder="email" id="email" required>
    <label for="password">Password:</label>
    <input type="password" placeholder="password" id="password" required>
    <p><button onclick="showHome()">submit</button></p>
    <p><button onclick="registerForm()">Create Account</button></p>
    `
    root.innerHTML=str+ "</div>";
}

const registerForm=()=>{
     const str=`
    <h3>registration Form</h3>
    <input type="text" placeholder="name" id="name" required>
    <input type="email" placeholder="email" id="email" required>
    <input type="password" placeholder="password" id="password" required>
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