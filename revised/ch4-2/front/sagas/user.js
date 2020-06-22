import axiox from 'axios';
import { all, fork, call, put, take, takeLatest, delay, } from 'redux-saga/effects';
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

function logInAPI(data) {
    return axios.post('/api/login', data);
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

function* watchLogIn() {
    console.log(1);
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
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}