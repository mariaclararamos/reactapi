import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';

function Favoritos(){

    const[filmes, setfilmes ] = useState([])
    
    useEffect(()=>{
        const minhalista = localStorage.getItem("@flix");
        setfilmes(JSON.parse(minhalista) || [])

    } , [] )

function excluirFilme(id){
    let filtroFilmes = filmes.filter((item)=> {
        return(item.id !== id)

    
    })
    setfilmes(filtroFilmes);
    localStorage.setItem('@flix', JSON.stringify(filtroFilmes))
}




    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span> Você não possui nenhum filme salvo!</span>}
            <ul>
                {filmes.map((item)=> {
                    return(
                        <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes </Link>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
 export default Favoritos;