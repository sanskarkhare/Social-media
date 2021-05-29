import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getDataApi } from '../../utils/fetchData';
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { Link } from "react-router-dom";
import UserCard from '../UserCard';
import LoadIcon from '../../images/loading.gif';

const Search = () => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setLoad(true)
            const res = await getDataApi(`search?username=${search}`, auth.token)
            setUsers(res.data.users)
            setLoad(false)
        } catch (err) {
            dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
        }

    }

    const handleClose = () => {
        setSearch('')
        setUsers([])
    }

    return (
        <>
            <form className='search_form' onSubmit={handleSearch}>
                <input type='text' name='search' id='search' value={search} 
                onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))} />

                <div className='search_icon' style={{opacity: search ? 0 : 0.3}}>
                    <span className="material-icons">search</span>
                    <span>Search</span>
                </div>
                <div className="close_search" style={{opacity: users.length === 0 ? 0 : 1}} onClick={handleClose}>
                    &times;
                </div>

                <button type='submit' style={{display: "none"}}>Search</button>
                {load && <img src={LoadIcon} alt='loading' className='loading'/>}
            
                <div className='users'>
                    {
                       search && users.map(user => (
                            
                                <UserCard 
                                key={user._id}
                                handleClose={handleClose}
                                user={user} 
                                border='border'/>
                            
                        ))
                    }
                </div>
            </form>
        </>
    )
}

export default Search
