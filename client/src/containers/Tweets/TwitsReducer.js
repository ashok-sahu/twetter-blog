import * as TweetConstants from './TwitsConstant'

const initialState = {
    loading:false,
    success:false,
    result:''
}

export const detailTweet = (state=initialState,action)=>{
    switch (action.type) {
        case TweetConstants.ENTER_ID:
            return{
                ...state,
                loading:true
            }
        case TweetConstants.SUCCESS_FETCH:
            return{
                ...state,
                loading:false,
                resultData:action.payload,
                success:true
            }
        case TweetConstants.FAIL_FETCH:
            return{
                ...state,
                loading:false,
                success:false,
            }

        default:
            return state;
    }
}