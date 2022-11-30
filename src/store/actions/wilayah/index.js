export const GET_WILAYAH_PROCESS = "GET_WILAYAH_PROCESS"
export const GET_WILAYAH_SUCCESS = "GET_WILAYAH_SUCCESS"
export const GET_WILAYAH_ERROR = "GET_WILAYAH_ERROR"
export const GET_WILAYAH_RESET = "GET_WILAYAH_RESET"
export const GET_WILAYAH = "GET_WILAYAH"

export const CREATE_WILAYAH_PROCESS = "CREATE_WILAYAH_PROCESS"
export const CREATE_WILAYAH_SUCCESS = "CREATE_WILAYAH_SUCCESS"
export const CREATE_WILAYAH_ERROR = "CREATE_WILAYAH_ERROR"
export const CREATE_WILAYAH_RESET = "CREATE_WILAYAH_RESET"
export const CREATE_WILAYAH = "CREATE_WILAYAH"

export const UPDATE_WILAYAH_PROCESS = "UPDATE_WILAYAH_PROCESS"
export const UPDATE_WILAYAH_SUCCESS = "UPDATE_WILAYAH_SUCCESS"
export const UPDATE_WILAYAH_ERROR = "UPDATE_WILAYAH_ERROR"
export const UPDATE_WILAYAH_RESET = "UPDATE_WILAYAH_RESET"
export const UPDATE_WILAYAH = "UPDATE_WILAYAH"

export function createWilayah(data) {
    let TYPE = data.reset ? CREATE_WILAYAH_RESET : CREATE_WILAYAH;
    return {
        type: TYPE,
        data: data
    }
}

export function getWilayah(data) {
    let TYPE = data.reset ? GET_WILAYAH_RESET : GET_WILAYAH;
    return {
        type: TYPE,
        data: data
    }
}

export function updateWilayah(data) {
    let TYPE = data.reset ? UPDATE_WILAYAH_RESET : UPDATE_WILAYAH;
    return {
        type: TYPE,
        data: data
    }
}