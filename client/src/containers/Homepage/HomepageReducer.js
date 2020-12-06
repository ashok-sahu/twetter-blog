import * as SearchConstants from './HomepageConstants'

const initialState = {
    loading:false,
    success:false,
    resultData:[]
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
        case SearchConstants.SEARCH_FAILED:
            return{
                ...state,
                loading:false,
                success:false,
            }

        default:
            return state;
    }
}