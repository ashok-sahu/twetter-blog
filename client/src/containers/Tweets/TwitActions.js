import BASE_URL from '../../utils/Axios'
import * as TweetConstants from './TwitsConstant'
import {success,error} from 'react-notification-system-redux'

export const detailTweet = (id) => async (dispatch, getState) => {
    try{
        dispatch({ type:TweetConstants.ENTER_ID});
        await BASE_URL.get(`/tweet/${id}`).then(res=>{
            console.log(res)
            const searchResults = res.data.data.data
            console.log(searchResults) 
            dispatch({
                type:TweetConstants.SUCCESS_FETCH,
                payload:searchResults
            })
        })
    }catch(err){
        console.error(err.response,'error')
        dispatch({
            type:TweetConstants.FAIL_FETCH,
            payload:err
        })
    }
}
