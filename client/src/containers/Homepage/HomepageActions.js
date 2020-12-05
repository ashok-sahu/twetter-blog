import BASE_URL from '../../utils/Axios'
import * as SearchConstants from './HomepageConstants'
import {success,error} from 'react-notification-system-redux'

export const searchInput = (inputText) => async (dispatch, getState) => {
    console.log(inputText,"inputtext git--------------------------",)
    try{
        dispatch({ type:SearchConstants.SEARCH_START});
        await BASE_URL.post('/recent',{text:inputText}).then(res=>{
            // console.log(res)
            const searchResults = res.data.data.data.statuses
            console.log(searchResults) 
            dispatch({
                type:SearchConstants.SEARCH_SUCCESS,
                payload:res.data
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