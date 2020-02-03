import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading'
import register from './register'
import user, { userSaga } from './user'
import notice, { noticeSaga } from './notice';
import notices, { noticesSaga } from './noticeList';
import applies, { appliesSaga } from './applyList';
import write from './write';

const rootReducer = combineReducers({
    auth,
    loading,
    register,
    user,
    notice,
    notices,
    applies,
    write,
});

export function* rootSaga(){
    yield all([authSaga(), userSaga(), noticeSaga(), noticesSaga(), appliesSaga()])
}

export default rootReducer;