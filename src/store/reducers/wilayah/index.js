import {
    GET_WILAYAH_PROCESS, GET_WILAYAH_SUCCESS, GET_WILAYAH_ERROR, GET_WILAYAH_RESET, UPDATE_WILAYAH_PROCESS, UPDATE_WILAYAH_SUCCESS, UPDATE_WILAYAH_ERROR, UPDATE_WILAYAH_RESET, CREATE_WILAYAH_PROCESS, CREATE_WILAYAH_SUCCESS, CREATE_WILAYAH_ERROR, CREATE_WILAYAH_RESET
} from "../../actions/wilayah";


const initState = {
    result: null,
    loading: false,
    error: null
}

const initStateCreate = {
    result: null,
    loading: false,
    error: null
}

const initStateUpdate = {
    result: null,
    loading: false,
    error: null
}

export function updateWilayah(state = initStateUpdate, action) {
    switch (action.type) {
        case UPDATE_WILAYAH_PROCESS:
            return {
                ...initState,
                loading: true,
                result: null,
                error: null,
            };
        case UPDATE_WILAYAH_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case UPDATE_WILAYAH_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case UPDATE_WILAYAH_RESET:
            return initState;
        default:
            return state;
    }
}

export function getWilayah(state = initState, action) {
    switch (action.type) {
        case GET_WILAYAH_PROCESS:
            return {
                ...initState,
                loading: true,
                result: null,
                error: null,
            };
        case GET_WILAYAH_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case GET_WILAYAH_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case GET_WILAYAH_RESET:
            return initState;
        default:
            return state;
    }
}

export function createWilayah(state = initStateCreate, action) {
    switch (action.type) {
        case CREATE_WILAYAH_PROCESS:
            return {
                ...initState,
                loading: true,
                result: null,
                error: null,
            };
        case CREATE_WILAYAH_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case CREATE_WILAYAH_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case CREATE_WILAYAH_RESET:
            return initState;
        default:
            return state;
    }
}



