import React from "react";
import {useState, useEffect, useCallback} from "react";
import axios from 'axios';
import api from '../api';


const Plataforma = () =>{

    const [nome, setNome] = useState('');
    const [error, setError] = useState('');
    const [salvo, setSalvo] = useState('');
    const [plataformas, setPlataformas] = useState([]);

    const atualizarPlataformas = useCallback(async () => {
        try {
          const response = await api.get('plataformas');
          setPlataformas(response.data);
        } catch (error) {
            setError('Erro ao acessar ao atualizar');
        }
      }, []);

    useEffect(() => {
        api.get('plataformas').then(response => {
          setPlataformas(response.data);
        });
      }, []);

   
    const handleAdicionar = async (e) => {
        e.preventDefault();

        console.log(nome);

        try{
            const response = await axios.post('http://localhost:3000/plataformas',
                JSON.stringify({nome}),
                {
                    headers:{ 'Content-Type': 'application/json'}
                }
            );
            console.log(response.data);
            setSalvo('Plataforma adicionado com sucesso!');
            atualizarPlataformas();
        } 

        catch (error){
            if(!error?.response){
                setError('Erro ao acessar o servidor');
            }
        }
    };


    return(
      <div>
      <div className="login-form-wrap">
       
      <div>
      <h2>Adicionar plataforma</h2>
      <form className="login-form">
        <h4>Plataformas cadastradas:</h4>
        <ul className ="plataformas">
        {plataformas &&
        plataformas.map((plataforma) =>(
            <li key={plataforma.id}>
                <p>- {plataforma.nome}</p>
            </li>
        ))}
        </ul>
        <p></p>
        <p className="nomeInput">Nome da nova plataforma:</p>
        <input type="text" 
            name="nome" 
            placeholder="Nome" 
            required
            onChange ={(e) => setNome(e.target.value)}
            />
        
        <button type= "submit" 
            className="btn-login"
            onClick={(e) => handleAdicionar(e)}>Adicionar</button>
      </form>
      <p className="mensagemSalvo">{salvo}</p>
      <p className="erroLogin">{error}</p>

      </div>
       
    </div>
    </div>
    );
};

export default Plataforma;