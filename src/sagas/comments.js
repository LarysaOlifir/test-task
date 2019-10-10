import { call, put, takeEvery, all, delay} from 'redux-saga/effects';
import { 
    REQUESTED, 
    SUCCEEDED, 
    FAILED, 
    ADD_COMMENT, 
    GET_COMMENTS, 
    DELETE_COMMENT, 
    EDIT_COMMENT 
} from '../constants';
import * as Api from '../services/comments';

function* addComment(action) {
    try {
        yield delay(2000); //simulate server call latency
        const comment = yield call(Api.addComment, action.text);
        yield put({type: ADD_COMMENT + SUCCEEDED, comment, fakeId: action.fakeId});
    } catch (e) {
        yield put({type: ADD_COMMENT + FAILED, message: e.message});
    }
}

function* getComments() {
    try {
        const comments = yield call(Api.getComments);
        yield put({type: GET_COMMENTS + SUCCEEDED, comments});
    } catch (e) {
        yield put({type: GET_COMMENTS + FAILED, message: e.message});
    }
}

function* deleteComment(action) {
    try {
        yield delay(2000); //simulate server call latency
        yield call(Api.deleteComment, action.id);
        yield put({type: DELETE_COMMENT + SUCCEEDED, id: action.id});
    } catch (e) {
        yield put({type: DELETE_COMMENT + FAILED, message: e.message});
    }
}

function* editComment(action) {
    try {
        yield delay(2000); //simulate server call latency
        const comment = yield call(Api.editComment, action.id, action.text);
        yield put({type: EDIT_COMMENT + SUCCEEDED, comment });
    } catch (e) {
        yield put({type: EDIT_COMMENT + FAILED, message: e.message});
    }
}

function* commentsSaga() {
    yield all ([
        takeEvery(ADD_COMMENT + REQUESTED, addComment),
        takeEvery(GET_COMMENTS + REQUESTED, getComments),
        takeEvery(DELETE_COMMENT + REQUESTED, deleteComment),
        takeEvery(EDIT_COMMENT + REQUESTED, editComment),
    ]);
}

export default commentsSaga;