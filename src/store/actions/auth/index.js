export const TOKEN_SETTER = "TOKEN_SETTER"
export const TOKEN_SETTER_RESET = "TOKEN_SETTER_RESET"

export const LOGIN_PROCESS = "LOGIN_PROCESS"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGIN_RESET = "LOGIN_RESET"
export const LOGIN = "LOGIN"

export const GET_SESSION_STORAGE = "GET_SESSION_STORAGE"


export function getSessionStorage() {
    let data = window.sessionStorage.getItem('survey');
    console.log(data)
    return {
        type: "GET_SESSION_STORAGE",
        data: data
    }
}

export function setToken(data) {
    let TYPE = data.reset ? TOKEN_SETTER_RESET : TOKEN_SETTER;
    return {
        type: TYPE,
        data: data
    }
}

export function login(data) {
    let TYPE = data.reset ? LOGIN_RESET : LOGIN;
    return {
        type: TYPE,
        data: data
    }
}
