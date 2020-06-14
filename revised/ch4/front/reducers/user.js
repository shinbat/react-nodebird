export const initilalState = {
    isLoggingIn: false,
    isLoggedIn: false,
    isLoggingOut: false,
    me: null,
    signUpData: {},
    loginData: {},
};

// async action creator -> redux saga(강좌4)

// redux-thunk를 이용한 비동기요청샘플 4강00:20
export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        console.log('state', state);
        setTimeout(() => {
            dispatch(loginRequestAction());
        }, 2000);
        // dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res.data));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    };
}
export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
    };
}

//action creator
export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
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
        type: 'LOG_OUT_REQUEST',
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
        case 'LOG_IN_REQUEST':
            console.log('reducer logIn');
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'zerocho' },
            };
            case 'LOG_IN_FAILURE':
                return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };
        case 'LOG_OUT_REQUEST':
            console.log('reducer logOut');
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            };
        default:
            return state;
    };
};

export default reducer;