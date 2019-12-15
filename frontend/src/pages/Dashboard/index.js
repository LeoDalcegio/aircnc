import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

// para não precisar toda vez que for mandar o usuario para uma outra rota ter que fazer o "history.push" é possivel utilizar-se o "Link"
import { Link } from 'react-router-dom';

export default function Dashboard(){

    // está sendo inicializado como uma lista vazia
    const [spots, setSpots] = useState([]);


    /* está sendo usado para executar uma busca inicial de dados da api logo assim que abrir a pagina, recebe uma função e um "array de dependências", ex: quando alguma var do array sofrer alguma alteração, esta função será executada. Como não tem nenhuma dependência, só quer que execute uma única vez, é deixado um array vazio */ 
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', { 
                headers: { user_id } 
            });
            
            setSpots(response.data)
        }

        loadSpots();
    }, []) 
    return  (
        <>
            <ul className="spot-list">

                {/* percorre uma lista de spots e para cada item da lista, retorna um html */}
                {spots.map(spot => (
                    
                    // é necessário usar "key" pois no react após utilizar uma estrutura de repetição, map por ex, é necessário informar no primeiro próximo elemento qual é a "chave" do elemento que foi "repetido", isso faz com que o react encontre mais facilmente o elemento na hora de "fazer CRUD" em elementos da lista
                    <li key={spot._id}>
                        { /* foi utilizado header e não image para deixar no memso tamanho todas as imagens, bastando apenas colocar como backgroundUrl a imagem */ }
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : `GRATUITO`}</span>
                    </li>
                ))}
            </ul>     

            <Link to="/new">
               <button className="btn"> Cadastrar novo spot</button>
            </Link>
        </>
    )
}