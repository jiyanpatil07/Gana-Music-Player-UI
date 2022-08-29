import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'
function Login() {
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="" />
            {/* spotify button */}
            <h1>Login pag hforj e</h1>
            {/* sptoify login */}
            {console.log(loginUrl)}
            <a href={loginUrl}>Login with Spotify</a>
        </div>

    )
}

export default Login
