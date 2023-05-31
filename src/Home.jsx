import { useRef } from 'react'
import { processText } from './FetchRoutines'

function Home({setJwt}) {
    function confirmLogin(jwt) {
      alert("You are logged in to your account.");
      setJwt(jwt);
    }
    function handleLogin(user) {
        fetch('http://localhost:8085/user/login', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(processText).then(confirmLogin).catch(() => { alert("Login failed"); });
    }
    function handleNewAccount(user) {
    fetch('http://localhost:8085/user/create', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(processText).then(confirmLogin).catch(() => {alert("Create new account failed")});
    }
    function handleLogout() {
        alert("You are logged out of your account.");
        setJwt('');
    }

    let nameInput = useRef();
    let passwordInput = useRef();
    let loginInput = useRef();

    const loginAction = (e) => { handleLogin({login:loginInput.current.value,password:passwordInput.current.value}); }
    const newAction = (e) => { handleNewAccount({login:loginInput.current.value,password:passwordInput.current.value, name:nameInput.current.value}); }
  return (
    <div>
        <h2>Welcome to Weekly!</h2>
        <h4>Log in to your account</h4>
        <p>Full name: <input type="text" ref={nameInput} /></p>
        <p>Login Username: <input type="text" ref={loginInput}/></p>
        <p>Password: <input type="text" ref={passwordInput} /></p>
        <p><button onClick={loginAction}>Log In</button><button onClick={newAction}>New Account</button></p>
        <h4>Log out of your account</h4>
        <p><button onClick={handleLogout}>Log Out</button></p>
    </div>
  )
}

export default Home;