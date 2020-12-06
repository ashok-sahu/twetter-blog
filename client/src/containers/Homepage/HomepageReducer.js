import * as SearchConstants from './HomepageConstants'

const initialState = {
    loading:false,
    success:false,
    resultData:[]
}

const searchState = {
    loading:false,
    success:false,
    resultData:[]
}
export const allTweet = (state=searchState,action)=>{
    switch (action.type) {
        case SearchConstants.ALLTWEET_START:
            return{
                ...state,
                loading:true
            }
        case SearchConstants.ALLTWEET_SUCCESS:
            return{
                ...state,
                loading:false,
                resultData:action.payload,
                success:true
            }
        case SearchConstants.ALLTWEET_FAILED:
            return{
                ...state,
                loading:false,
                success:false,
            }

        default:
            return state;
    }
}


export const searchTweet = (state=initialState,action)=>{
    switch (action.type) {
        case SearchConstants.SEARCH_START:
            return{
                ...state,
                loading:true
            }
        case SearchConstants.SEARCH_SUCCESS:
            return{
                ...state,
                loading:false,
                resultData:action.payload,
                success:true
            }
        case SearchConstants.SEARCH_FAIL:
            return{
                ...state,
                loading:false,
                success:false,
            }

        default:
            return state;
    }
}

