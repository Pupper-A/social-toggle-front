import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/userConstants';

export const login = (username, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const {data} = await axios({
            method: "POST",
            url:"/api/users/login/",
            data:{
                username: username,
                password, password
            },
            headers: {
                "Content-Type": "application/json",
            }
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}