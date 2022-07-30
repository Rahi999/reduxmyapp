import { getProductsFailure, getProductsRequest, getProductsSuccess } from "./actionsType"

export const getPRequest = () => {
    return {
        type: getProductsRequest
    }
}

export const getPFailure = () => {
    return {
        type: getProductsFailure
    }
}

export const getPsuccess = (payload) => {
    return {
        type:getProductsSuccess,payload
    }
}