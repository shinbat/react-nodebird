import produce from "immer";

export const initilalState = {
    followLoading: false,
    followDone: false,
    followError: null,
    unfollowLoading: false,
    unfollowDone: false,
    unfollowError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false,
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    logInData: {},
    logOutData: {},
    signUpData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

// export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
// export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
// export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
    ...data,
    id: 1,
    nickname: 'zerocho', 
    Posts: [{ id: 1 }], 
    Followings: [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '노드버드 오피셜'}], 
    Followers: [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '노드버드 오피셜'}], 
});

//action creator
export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};
// saga가 호출해주므로 불필요함
// export const loginSuccessAction = (data) => {
//     return {
//         type: 'LOG_IN_SUCCESS',
//         data,
//     };
// };
// export const loginFailureAction = (data) => {
//     return {
//         type: 'LOG_IN_FAILURE',
//         data,
//     };
// };

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    };
};
// export const logoutSuccessAction = () => {
//     return {
//         type: 'LOG_OUT_SUCCESS',
//     };
// };
// export const logoutFailureAction = () => {
//     return {
//         type: 'LOG_OUT_FAILURE',
//     };
// };

const reducer = (state = initilalState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FOLLOW_REQUEST:
                draft.followLoading = true;
                draft.followDone = false;
                draft.followError = null;
                break;
            case FOLLOW_SUCCESS:
                draft.followLoading = false;
                draft.followDone = true;
                draft.me.Followings.push({ id: action.data });
                break;
            case FOLLOW_FAILURE:
                draft.followLoading = true;
                draft.followError = action.error;
                break;
            case UNFOLLOW_REQUEST:
                draft.unfollowLoading = true;
                draft.unfollowDone = false;
                draft.unfollowError = null;
                break;
            case UNFOLLOW_SUCCESS:
                draft.unfollowLoading = false;
                draft.unfollowDone = true;
                draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
                break;
            case UNFOLLOW_FAILURE:
                draft.unfollowLoading = true;
                draft.unfollowError = action.error;
                break;
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
                // return {
                //     ...state,
                //     logInLoading: true,
                //     logInDone: false,
                //     logInError: null,
                // };
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.me = action.data;
                break;
                // return {
                //     ...state,
                //     logInLoading: false,
                //     logInDone: true,
                //     logInError: null,
                //     me: dummyUser(action.data),
                // };
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
                // return {
                //     ...state,
                //     logInLoading: false,
                //     logInError: action.error,
                // };
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
                // return {
                //     ...state,
                //     logOutLoading: true,
                //     logOutDone: false,
                //     logOutError: null,
                // };
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = false;
                draft.me = null;
                break;
                // return {
                //     ...state,
                //     logOutLoading: false,
                //     logOutDone: true,
                //     me: null,
                // };
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
                // return {
                //     ...state,
                //     logOutLoading: false,
                //     logOutError: action.error,
                // };
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
                // return {
                //     ...state,
                //     signUpLoading: true,
                //     signUpDone: false,
                //     signUpError: null,
                // };
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
                // return {
                //     ...state,
                //     signUpLoading: false,
                //     signUpDone: true,
                // };
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
                // return {
                //     ...state,
                //     signUpLoading: false,
                //     signUpError: action.error,
                // };            
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknameDone = false;
                draft.changeNicknameError = null;
                break;
                // return {
                //     ...state,
                //     changeNicknameLoading: true,
                //     changeNicknameDone: false,
                //     changeNicknameError: null,
                // };
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                break;
                // return {
                //     ...state,
                //     changeNicknameLoading: false,
                //     changeNicknameDone: true,
                // };
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
                draft.changeNicknameError = action.error;
                break;
                // return {
                //     ...state,
                //     changeNicknameLoading: false,
                //     changeNicknameError: action.error,
                // };            
            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id: action.data });
                break;
            //     return {
            //         ...state,
            //         me: {
            //             ...state.me,
            //             Posts: [{ id: action.data } , ...state.me.Posts],
            //         },
            //      };             
            case REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data );
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: state.me.Posts.filter((v) => v.id !== action.data ),
                //     },
                // };             
            default:
                break;
                // return state;
        };
    });
};

export default reducer;