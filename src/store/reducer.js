import {LS} from '../config/localstorage'
import translate from '../shared/translate'

const initialState = {
  isFetching: false,
  allQuotes: [],
  allAuthors: new Set(),
  allImages: new Map(),
  phrase: '',
  language: translate.currentLanguage,
  token: localStorage.getItem(LS.token),
  admin: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_POSTS_REQUEST':
    return {...state, isFetching: true }
  case 'FETCH_POSTS_FAILURE':
    return {...state, isFetching: false, error: 'Ups, greska' }
  case 'FETCH_POSTS_SUCCESS':
    return {...state, isFetching: false, allQuotes: action.allQuotes }
  case 'SET_ALL_QUOTES':
    return {...state, allQuotes: action.allQuotes }
  case 'SET_ALL_AUTHORS':
    return {...state, allAuthors: action.allAuthors }
  case 'SET_ALL_IMAGES':
    return {...state, allImages: action.allImages }
  case 'SET_PHRASE':
    return {...state, phrase: action.phrase }
  case 'SET_LANGUAGE':
    return {...state, language: action.language }
  case 'SET_TOKEN':
    return {...state, token: action.token }
  case 'SET_ADMIN':
    return {...state, admin: action.admin }
  case 'SET_USER':
    return {...state, token: action.token, admin: action.admin }
  default:
    return state
  }
}