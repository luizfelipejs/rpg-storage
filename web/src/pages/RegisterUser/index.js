import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Input from '../../components/input'

import api from '../../services/api'

import './styles.css';

function RegisterUser() {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handleRegister = async event => {
        event.preventDefault(); 
        
        try {
            await api.post("/user",{
                username,
                email,
                password
            })

            history.push("/login")
            console.log("Cadastro realizado")
            alert("Ok cadastro realizado")
        } catch (error) {
            console.log(error)
            return alert("algum erro ocorreu")
        }
    }

  return (
    <div className="register-user">
        <form className="register-form" onSubmit={handleRegister}>
            <h1>RPG STORAGE</h1>
            <p>Faça seu registro</p>
            <Input 
                name="username"
                label="username"
                onChange={e => setUsername(e.target.value)}
                value={username}
            />
            <Input 
                name="email"
                label="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <Input 
                name="password"
                type="password"
                label="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <button className="submit" type="submit">
                registrar
            </button>
        </form>
    </div>
  )
}

export default RegisterUser;