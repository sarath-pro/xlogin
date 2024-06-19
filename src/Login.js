import React, {useState} from 'react'

function Login() {
    const [message, setMessage] = useState("")
    return (
        <div>
            <h2>Login Page</h2>
            <h4>{message}</h4>
            {
                !message.includes('Welcome') && (
                    <form onSubmit={(event)=>{
                        event.preventDefault();
                        if(event.target['username'].value==='user' && event.target['password'].value==='password') {
                            setMessage('Welcome, user')
                        } else {
                            setMessage('Invalid username or password')
                        }
                    }}>
                    <label for="username">Username: </label>
                    <input type='text' id='username' name='username' required />
                    <br />
                    <label for="password">Password: </label>
                    <input type='password' id='password' name='password' required />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
                )
            }
            
        </div>
    )
}

export default Login