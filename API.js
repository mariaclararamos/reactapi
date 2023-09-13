import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
    


});
export default api;

// sempre seguir um padrao na nomenclatura das variaveis 