import { getLoginFailure, getLoginRequest, getLoginSuccess } from "./actionsType"

export const getLogRequest = () => {
    return {
        type : getLoginRequest
    }
}

export const getLogFailure = () => {
    return {
        type : getLoginFailure
    }
}

export const getLogSuccess = (payload)=> {
    return {
        type : getLoginSuccess,payload
    }
}