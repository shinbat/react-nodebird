import { all, fork, call, put, take, takeLatest, delay } from 'redux-saga/effects';
import axiox from 'axios';

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn');
         // const result = yield call(loginAPI, action.data); 
        yield delay(2000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,     
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
            type: 'LOG_OUT_SUCCESS',
        });   
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,     
        });
    }; 
};

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);   
}
function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ]);
}