import { loadData, saveData } from "../../utils/localStorage"
import { getProductsFailure, getProductsRequest, getProductsSuccess } from "./actionsType"

const initState = {
    products :  [],
    status : false,
    isLoading : false,
    isError : false,
}

export const reducer = (oldState = initState, {type,payload}) => {
switch(type) {
    case getProductsRequest : {
        return {
            ...oldState,
            isLoading :true,
            isError : false
        }
    }
    case getProductsFailure : {
      return {
        ...oldState,
       isError : true
      }
    }
    case getProductsSuccess : {
      
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        products : [...payload]
      }
    }
    default :
    return oldState
}
}