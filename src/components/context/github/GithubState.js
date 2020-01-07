import React, { useReducer } from 'react'
import axios from 'axios'

import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import { SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER, CLEAR_USERS } from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Using the Search bar
    const searchUsers = async text => {
        if (text !== '') {
            setLoading();
            //setAlert(false);

            const res = await axios.get(
                `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
            )

            dispatch({
                type: SEARCH_USERS,
                payload: res.data.items
            });
        }
        else {
            // setAlert(true);
            // setTimeout(() => setAlert(false), 5000);
        }
    }


    //Get User

    // Get Repos

    //Clear Users

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;

