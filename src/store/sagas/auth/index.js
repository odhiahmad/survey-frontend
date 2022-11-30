import { put, takeLatest } from "redux-saga/effects";
import {
    LOGIN_PROCESS, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN
} from './../../actions/auth'
import { filterFetch } from './../../../utils/apiFetch'
import {
    API_TIMEOUT,
    API_URL_WEB,
} from './../../../utils/constant'

function* login(action) {
    yield put({
        type: LOGIN_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + 'api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
        });
        yield put({
            type: LOGIN_SUCCESS,
            result: result,
        });
    } catch (error) {
        yield put({
            type: LOGIN_ERROR,
            error: error,
        });
    }
}


export function* watchLogin() {
    yield takeLatest(LOGIN, login);
}


