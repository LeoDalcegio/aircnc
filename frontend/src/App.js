import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');
  
  async function handleSubmit(event){
    
    // faz o usuário não ser redirecionado para outra tela
    event.preventDefault(); 

    // não foi utilizada a rota inteira por conta da baseURL dentro de api.js
    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"></img>

      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
