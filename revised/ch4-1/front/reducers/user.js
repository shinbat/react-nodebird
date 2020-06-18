export const initilalState = {
    logInLoading: false,
    logInData: null,
    logInError: null,
    logOutLoading: false,
    logOutData: null,
    logOutError: null,
    signUpLoading: false,
    signUpData: null,
    signUpError: null,
    me: null,
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

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

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
    switch (action.type) {
        case LOG_IN_REQUEST:
            console.log('reducer logIn');
            return {
                ...state,
                logInLoading: true,
                logInError: null,
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInError: null,
                me: { ...action.data,
                    id: 1, 
                    nickname: 'zerocho', 
                    Posts: [], 
                    Followings: [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '노드버드 오피셜'}], 
                    Followers: [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '노드버드 오피셜'}], 
                },
            };
            case LOG_IN_FAILURE:
                return {
                    ...state,
                    logInLoading: false,
                    logInError: action.error,
            };
        case LOG_OUT_REQUEST:
            console.log('reducer logOut');
            return {
                ...state,
                logOutLoading: true,
                logOutError: null,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutLoading: false,
                me: null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error,
            };
        case SIGN_UP_REQUEST:
            console.log('reducer logIn');
            return {
                ...state,
                signUpLoading: true,
                signUpError: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading: false,
                signUpError: action.error,
        };            
        default:
            return state;
    };
};

export default reducer;