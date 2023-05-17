import axios from 'axios';
import Notiflix from 'notiflix';
const API_KEY = `34827210-dfbfa3fa5ea498ab11e20bf55`;
const BASE_URL = 'https://pixabay.com/api/';
const SEARCH_TYPE = `photo`;
const SAFE_SEARCH = true;
const perPage = 12;

export const getPixabay = async (searchValue, currentPage) => await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchValue}&image_type=${SEARCH_TYPE}&page=${currentPage}&per_page=${perPage}&orientation=horizontal&safesearch=${SAFE_SEARCH}`)
    .catch(function (error) { Notiflix.Notify.failure(`${error.message}`) });



