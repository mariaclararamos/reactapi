import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/API.js';
import './filme-info.css'

  function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
   

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "baf8a4cd0a4eb2cd9cb9dcdda1aa2473",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", {replace : true})
                return;
            })
        }

        loadFilme();

        
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@flix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvo)=> filmesSalvo.id === filme.id)

        if(hasFilme){
            alert("Esse filme já está salvo em sua lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@flix", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso!")
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt ={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10 </strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
    
        </div>
    )
}

export default Filme;

