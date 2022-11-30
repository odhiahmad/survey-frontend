import {
    TOKEN_SETTER, TOKEN_SETTER_RESET,
    LOGIN_PROCESS, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_RESET, GET_SESSION_STORAGE
} from "../../actions/auth";

const initStateST = {
    data: null,
    isAuthenticated: false,
};

const initState = {
    result: null,
    loading: false
}

const initStateSessionStorage = {
    result: null,
    isAuthenticated: false,
}
export function setToken(state = initStateST, action) {
    switch (action.type) {
        case TOKEN_SETTER:
            const data = action.data;
            window.sessionStorage.setItem('survey', data.token);
            return {
                ...state,
                isAuthenticated: true,
                data: data
            };
        case TOKEN_SETTER_RESET:
            return initStateST;
        default:
            return state;
    }
}

export function login(state = initState, action) {
    switch (action.type) {
        case LOGIN_PROCESS:
            return {
                ...initState,
                loading: true,
                result: null,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case LOGIN_RESET:
            return initState;
        default:
            return state;
    }
}

export function getSessionStorage(state = initStateSessionStorage, action) {
    switch (action.type) {
        case GET_SESSION_STORAGE:
            return {
                ...initStateSessionStorage,
                result: action.data,
                isAuthenticated: true
            };

        default:
            return state;
    }
}



