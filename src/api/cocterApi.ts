import axios from 'axios'

export const coctelApi = axios.create({ baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php' })
//?f=b