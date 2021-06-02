import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { follow, unFollow } from '../redux/actions/profileActions'


const FollowBtn = ({user}) => {
    
    const { auth, profile } = useSelector(state => state)
    const dispatch = useDispatch()

    const [followed, setFollowed] = useState(false)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(auth.user.following.find(item => item._id === user._id)){
        setFollowed(true)
    }
    },[auth.user.following, user._id])

    const handleFollow = async () => {
        if(load) return;

        setFollowed(true)
        setLoad(true)
        await dispatch(follow({users: profile.users, user, auth}))
        setLoad(false)
    }

    const handleUnfollow = async () => {
        if(load) return;
        setFollowed(false)
        setLoad(true)
        dispatch(unFollow({users: profile.users, user, auth}))
        setLoad(false)
    }

    return (
        followed ? 
        <button className="btn btn-outline-danger" onClick={handleUnfollow}>
                  Unfollow
        </button>
                 :
        <button className="btn btn-outline-info" onClick={handleFollow}>
            Follow
        </button>
                  
        
    )
}

export default FollowBtn
