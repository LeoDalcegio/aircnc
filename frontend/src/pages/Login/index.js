import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }){
    const [email, setEmail] = useState('');
  
    async function handleSubmit(event){
        
        // faz o usuário não ser redirecionado para outra tela
        event.preventDefault(); 

        // não foi utilizada a rota inteira por conta da baseURL dentro de api.js
        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        localStorage.setItem('user', _id);
        
        /* envia o usuário para "/dashboard" */
        history.push('/dashboard');
    }

    return (
        // no react é obrigatório ter um elemento "por fora", ele obriga a existir uma div por exemplo, ou nesse caso, uma tag vazia, sem nenhum elemento dentro (fragment)
      <>  
        <p>
            Ofereça <strong>spots</strong> para programadores e eoncontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit = {handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}

            // função que recebe um evento e desse evento seta o valor de email
            onChange={event => setEmail(event.target.value)} 
            />

            <button className="btn" type="submit">Entrar</button>
        </form>
      </>
    )
}