import React from "react";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

const Filme = () =>{

    const[filmes, setFilmes] = useState([]);

    useEffect(() =>{
        api.get('filmes').then(response =>{
            setFilmes(response.data);
        });
    }, []);

    return (
        <div>
            <div className="login-form-wrap">
                <h1>Filmes e series</h1>
                <ul className="filmes">
                    {filmes &&
                    filmes.map((filme) =>(
                        <li key={filme.id}>
                            <h2>{filme.nome}</h2>
                            <div className = "infoFilme">
                                <p>Assitido e recomendacao: {filme.recomendo}</p>
                               
                                <p>Plataforma disponivel:  {filme.plataforma}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>    
        </div>
    );
};

export default Filme;