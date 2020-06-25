import axios from 'axios';
import { all, fork, call, put, take, takeLatest, delay, } from 'redux-saga/effects';
import { 
    CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

function changeNicknameAPI(data) {
    return axios.patch('/user/nickname', { nickname: data });
};
function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data); 
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data,
        });   
    } catch (err) {
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function loadUserAPI() {
    return axios.get('/user');
};
function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data); 
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });   
    } catch (err) {
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function followAPI(data) {
    return axios.post('/api/login', data);
}

function* follow(action) {
    try {
        console.log('saga follow');
         // const result = yield call(loginAPI, action.data); 
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function unfollowAPI(data) {
    return axios.post('/api/login', data);
}

function* unfollow(action) {
    try {
        console.log('saga unfollow');
         // const result = yield call(loginAPI, action.data); 
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function logInAPI(data) {
    return axios.post('/user/login', data);
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data); 
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });   
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function logOutAPI() {
    return axios.post('/user/logout');
}

function* logOut(action) {
    try {
        const result = yield call(logOutAPI); 
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });   
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function signUpAPI(data) {
    return axios.post('/user', data);
};

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data); 
        console.log('saga signUp', result);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,     
        });
    }; 
};

function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);   
}
function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);   
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);   
}
function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);   
}
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);   
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    console.log(0);
    yield all([
        fork(watchChangeNickname),
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}