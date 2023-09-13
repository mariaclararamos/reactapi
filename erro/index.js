import { Link } from "react-router-dom";
import './erro.css';


function Erro(){
    return(
        <div className="not-found">
            <h1>401</h1>
            <h2>Pagina nao encontrada!</h2>
            <Link to='/'>Veja todos os filmes!</Link>
            </div>
    )
}

export default Erro; 

//  padrao de status para pagina nao encontrada = 401
// sempre utilizar o nome das funcoes no padrao CamelCase 