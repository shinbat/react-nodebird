import axiox from 'axios';
import { all, fork, call, put, take, takeLatest, delay } from 'redux-saga/effects';

import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data); 
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            error: err.resopnse.data,     
        });
    }; 
};

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}