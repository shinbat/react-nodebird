import axiox from 'axios';
import { all, fork, call, put, take, takeLatest, delay, } from 'redux-saga/effects';

import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
        REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
        ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/api/post', data);
}
function removePostAPI(data) {
    return axios.post('/api/post', data);
}
function addCommentAPI(data) {
    return axios.post('/api/post/${data.postId}/comment', data);
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
function* removePost(action) {
    try {
        // const result = yield call(addPostAPI, action.data); 
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        console.log(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.resopnse.data,     
        });
    }; 
};
function* addComment(action) {
    try {
        // const result = yield call(addCommentAPI, action.data); 
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        });   
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.resopnse.data,     
        });
    }; 
};

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}