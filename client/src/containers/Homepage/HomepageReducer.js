import * as SearchConstants from './HomepageConstants'

const initialState = {
    loading:false,
    success:false,
    resultData:""
}

export const searchTweet = (state=initialState,action)=>{
    console.log(state,action)
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
        case SearchConstants:
            return{
                ...state,
                loading:false,
                success:false,
            }

        default:
            return state;
    }
}