import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import api from '../api';

const Adicionar = () =>{

    const [nome, setNome] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [plataformas, setPlataformas] = useState([]);
    const [recomendo, setRecomendo] = useState('');
    const [error, setError] = useState('');
    const [salvo, setSalvo] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get('plataformas').then(response => {
          setPlataformas(response.data);
        });
      }, []);

    const handleAdicionar = async (e) => {
        e.preventDefault();

        console.log(nome, plataforma, recomendo);

        try{
            const response = await axios.post('http://localhost:3000/filmes',
                JSON.stringify({nome,plataforma, recomendo}),
                {
                    headers:{ 'Content-Type': 'application/json'}
                }
            );
            console.log(response.data);
            setUser(response.data);
            setSalvo('Filme adicionado com sucesso!');
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
      <h2>Adicionar</h2>
      <form className="login-form">
        <p className="nomeInput">Nome:</p>
        <input type="text" 
            name="nome" 
            placeholder="Nome" 
            required
            onChange ={(e) => setNome(e.target.value)}
            />
        <p className="nomeInput">Plataforma:</p>
        <select id="plataforma" name="plataforma" placeholder="" onChange={(e) => setPlataforma(e.target.value)} required >
            <option value="-">-</option>
            {plataformas &&
            plataformas.map((plataforma) => (
            <option key={plataforma.id} value={plataforma.nome}>{plataforma.nome}</option>
            ))}
        </select>
        <p className="nomeInput">Recomendacao / Assistido:</p>
        <input type="text" 
            name="recomendo" 
            placeholder="Recomendo" 
            required
            onChange ={(e) => setRecomendo(e.target.value)}
            />
        <button type= "submit" 
            className="btn-login"
            onClick={(e) => handleAdicionar(e)}>Salvar</button>
      </form>
      <p className="mensagemSalvo">{salvo}</p>
      <p className="erroLogin">{error}</p>

      </div>
       
    </div>
    </div>
    );
};

export default Adicionar;