import BASE_URL from '../../utils/Axios'
import * as SearchConstants from './HomepageConstants'
import {success,error} from 'react-notification-system-redux'

export const searchInput = (inputText) => async (dispatch, getState) => {
    try{
        dispatch({ type:SearchConstants.SEARCH_START});
        await BASE_URL.post('/search',{query:inputText}).then(res=>{
            console.log(res)
            const searchResults = res.data.data.data.statuses
            console.log(searchResults) 
            dispatch({
                type:SearchConstants.SEARCH_SUCCESS,
                payload:searchResults
            })
            dispatch(success)
        })
    }catch(err){
        console.error(err.response,'error')
        dispatch({
            type:SearchConstants.SEARCH_FAILED,
            payload:err
        })
    }
}

export const allTweets = () =>async(dispatch,getState)=>{
    try{
        dispatch({ type:SearchConstants.SEARCH_START});
        await BASE_URL.get('/allTweets').then(res=>{
            console.log(res)
            const searchResults = res.data.data.data.statuses
            console.log(searchResults) 
            dispatch({
                type:SearchConstants.SEARCH_SUCCESS,
                payload:searchResults
            })
        })
    }catch(err){
        console.error(err.response,'error')
        dispatch({
            type:SearchConstants.SEARCH_FAILED,
            payload:err
        })
    }
}