import { loadData, saveData } from "../../utils/localStorage"
import { getLogRequest, getLogSuccess } from "./actions"
import { getLoginFailure, getLoginRequest, getLoginSuccess } from "./actionsType"

const initState = {
    isLoginLoading : false,
    isLoginError : false,
    token : '',
    isAuth : loadData("isAuth") || false
}

export  const reducer = (oldState = initState, {type,payload}) => {
    switch(type){

        case getLoginRequest : {
            return {
               ...oldState , isLoginLoading : true,
               isLoginError : false
            }
        }
        case getLoginFailure :  {
     return {
        ...oldState, isLoginLoading: false,
        isLoginError: true
     }
        }    

        case getLoginSuccess : {
              let tokn = payload;
              const auth = true;
              saveData("isAuth",auth)
              saveData("token",tokn)
             return {
                ...oldState,
                isLoginLoading : false,
                isLoginError: false,
                token: tokn,
                isAuth: auth
             }
        }
        default : 
        return oldState
    }
}