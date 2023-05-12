import axios from 'axios';

const API_KEY = `34827210-dfbfa3fa5ea498ab11e20bf55`;
const BASE_URL = 'https://pixabay.com/api/';
const SEARCH_TYPE = `photo`;
const SAFE_SEARCH = true;
const perPage = 12;

export const getPhoto = (searchValue, currentPage) => axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchValue}&image_type=${SEARCH_TYPE}&page=${currentPage}&per_page=${perPage}&orientation=horizontal&safesearch=${SAFE_SEARCH}`);
export const getByID = (id) => axios.get(`${BASE_URL}?key=${API_KEY}&id=${id}&image_type=${SEARCH_TYPE}`);

