import { put, takeLatest } from "redux-saga/effects";
import {
    GET_WILAYAH_PROCESS, GET_WILAYAH_SUCCESS, GET_WILAYAH_ERROR, GET_WILAYAH,
    CREATE_WILAYAH_PROCESS, CREATE_WILAYAH_SUCCESS, CREATE_WILAYAH_ERROR, CREATE_WILAYAH,
    UPDATE_WILAYAH_PROCESS, UPDATE_WILAYAH_SUCCESS, UPDATE_WILAYAH_ERROR, UPDATE_WILAYAH,
} from './../../actions/wilayah'
import { filterFetch } from './../../../utils/apiFetch'
import {
    API_TIMEOUT,
    API_URL_WEB,
} from './../../../utils/constant'

function* createWilayah(action) {
    yield put({
        type: CREATE_WILAYAH_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + 'api/rumah/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: sessionStorage.getItem("survey"),
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
        });
        yield put({
            type: CREATE_WILAYAH_SUCCESS,
            result: result,
        });
    } catch (error) {
        yield put({
            type: CREATE_WILAYAH_ERROR,
            error: error,
        });
    }
}

function* updateWilayah(action) {
    yield put({
        type: UPDATE_WILAYAH_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + 'api/rumah/update', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                Authorization: sessionStorage.getItem("survey"),
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
        });
        yield put({
            type: UPDATE_WILAYAH_SUCCESS,
            result: result,
        });
    } catch (error) {
        yield put({
            type: UPDATE_WILAYAH_ERROR,
            error: error,
        });
    }
}

function* getWilayah(action) {
    yield put({
        type: GET_WILAYAH_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + 'api/rumah/getAllByKota', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: sessionStorage.getItem("survey"),
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
        });
        yield put({
            type: GET_WILAYAH_SUCCESS,
            result: result,
        });
    } catch (error) {
        yield put({
            type: GET_WILAYAH_ERROR,
            error: error,
        });
    }
}


export function* watchGetWilayah() {
    yield takeLatest(GET_WILAYAH, getWilayah);
}

export function* watchCreateWilayah() {
    yield takeLatest(CREATE_WILAYAH, createWilayah);
}

export function* watchUpdateWilayah() {
    yield takeLatest(UPDATE_WILAYAH, updateWilayah);
}


