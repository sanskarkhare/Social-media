import { GLOBALTYPES } from "./globalTypes";
import { getDataApi, patchtDataApi } from "../../utils/fetchData";
import { imageUpload } from "../../utils/imageUpload";

export const PROFILE_TYPES = {
    LOADING: 'LOADING',
    GET_USER: 'GET_USER'
}

export const getProfileUsers = ({users, id, auth}) => async(dispatch) => {
    if(users.every(user => user._id !== id)){
        try {
            dispatch({type: PROFILE_TYPES.LOADING, payload: true})
            const res = await getDataApi(`/user/${id}`, auth.token)
            dispatch({
                type: PROFILE_TYPES.GET_USER, 
                payload: res.data
            })
            dispatch({type: PROFILE_TYPES.LOADING, payload: false})
        } catch (err) {
            dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}
            })
        }
    }
}

export const updateProfileUsers = ({userData, avatar, auth}) => async(dispatch) => {
    if(!userData.fullname)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Please add your full name."}})

    if(userData.fullname.length > 25)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Your full name too long."}})

    if(userData.story.length > 200)
    return dispatch({type: GLOBALTYPES.ALERT, payload: {error: "Your story too long."}})

    try {
        let media;
        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

        if(avatar) media = await imageUpload([avatar])

        const res = await patchtDataApi("user", {
            ...userData,
            avatar: avatar ? media[0].url : auth.user.avatar
        })

        console.log(res)

        dispatch({type: GLOBALTYPES.ALERT, payload: {loading: false}})

    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
}
}
