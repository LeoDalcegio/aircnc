import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes(){
    return (
        // informa para a aplicação que é daqui que começa o roteamento do react
        <BrowserRouter>
            {/* switch garante que apenas uma rota possa ser acessada por vez */}
            <Switch> 
                {/* exact serve para garantir que a rota "Login" deva ser chamada apenas quando o caminho for EXATAMENTE "/", ps: o react não verifica se essas rota é a informada, ele verifica se a rota informada existe aqui, ao achar, à executa. Neste caso, Login ou seja:"/", seria chamado para todas as rotas da aplicação, pois "/" está contido em todas as rotas  */}
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}