import { SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER, CLEAR_USERS } from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        default:
            return state;
    }
}