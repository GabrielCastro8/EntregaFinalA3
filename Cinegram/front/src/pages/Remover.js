import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

const Remover = () =>{

    const [nome, setNome] = useState('');
    const [error, setError] = useState('');
    const [removido, setRemovido] = useState('');
    const [user, setUser] = useState(null);

    const handleRemover = async (e) => {
        e.preventDefault();

        console.log(nome);

        try{
            const response = await axios.delete(`http://localhost:3000/filmes/${nome}`,
                
                
                {
                    headers:{ 'Content-Type': 'application/json'}
                }  
            );
            console.log(response);
            console.log(response.data);
            setUser(response.data);
            setRemovido('Filme/Serie removido(a) com sucesso!');
        } 

        catch (error){
            if(!error?.response){
                setError('Erro ao acessar o servidor');
            }
            else{
                
                setError('sla');
            }
        }
    };


    return(
      <div>
      <div className="login-form-wrap">
       
      <div>
      <h2>Remover filme/serie</h2>
      <form className="login-form">
        <h3>Digite exatamente o nome da serie/filme que voce deseja remover!</h3>
        <p className="nomeInput">Nome:</p>
        <input type="text" 
            name="nome" 
            placeholder="Nome" 
            required
            onChange ={(e) => setNome(e.target.value)}
            />
        
        <button type= "submit" 
            className="btn-login"
            onClick={(e) => handleRemover(e)}>Remover</button>
      </form>
      <p className="mensagemSalvo">{removido}</p>
      <p className="erroLogin">{error}</p>

      </div>
       
    </div>
    </div>
    );
};

export default Remover;