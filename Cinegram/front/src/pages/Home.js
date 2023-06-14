import React from "react";
import {useState} from "react";
import axios from 'axios';

const Home = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);

        try{
            const response = await axios.post('http://localhost:3000/login',
                JSON.stringify({email,password}),
                {
                    headers:{ 'Content-Type': 'application/json'}
                }
            );
            console.log(response.data);
            setUser(response.data);
        } 

        catch (error){
            if(!error?.response){
                setError('Erro ao acessar o servidor');
            }
            else if(error.response.status == 401){
                setError('Usuario ou senha invalidos');
            }
        }
    };

    const handleLogout = async(e) => {
        e.preventDefault();
        setUser(null);
        setError('');
    };

    return(
      <div>
      <div className="login-form-wrap">
      
      {user == null? (  

      <div>
      <h2>Login</h2>
      <form className="login-form">
        <p className="nomeInput">Email:</p>
        <input type="email" 
            name="email" 
            placeholder="Email" 
            required
            onChange ={(e) => setEmail(e.target.value)}
            />
        <p className="nomeInput">Senha:</p>
        <input type="password"
             name="password" 
             placeholder="Password" 
             required
             onChange ={(e) => setPassword(e.target.value)}
             />
        <button type= "submit" 
            className="btn-login"
            onClick={(e) => handleLogin(e)}>Login</button>
      </form>
      <p className="erroLogin">{error}</p>

      </div>
      ) : (
        <div>
            <h2>Voce foi logado {user.name}</h2>
            
            <button type = "button" 
                    className= 'btn-login'
                    onClick={(e) => handleLogout(e)}>
                    Logout    
            </button>
        </div>
      )}
    </div>
    </div>
    );
};

export default Home;