import axiox from 'axios';
import { all, fork, call, put, take, takeLatest, delay, } from 'redux-saga/effects';
import { 
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

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
            error: err.resopnse.data,     
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
            error: err.resopnse.data,     
        });
    }; 
};

function logInAPI(data) {
    return axios.post('/api/logIn', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn');
         // const result = yield call(loginAPI, action.data); 
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.resopnse.data,     
        });
    }; 
};

function logOutAPI(data) {
    return axios.post('/api/logout', data);
}

function* logOut(action) {
    try {
        console.log('saga logOut');
         // const result = yield call(loginAPI, action.data); 
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });   
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.resopnse.data,     
        });
    }; 
};

function signUpAPI(data) {
    return axios.post('/api/signUp', data);
}

function* signUp(action) {
    try {
        console.log('saga signUp');
         // const result = yield call(signUpAPI, action.data); 
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.resopnse.data,     
        });
    }; 
};

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
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}