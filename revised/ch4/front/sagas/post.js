import { all, fork, call, put, take, takeLatest, delay } from 'redux-saga/effects';
import axiox from 'axios';

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data); 
        yield delay(2000);
        yield put({
            type: 'ADD_POST_SUCCESS',
            // data: result.data,
        });   
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.resopnse.data,     
        });
    }; 
};

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}