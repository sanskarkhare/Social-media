import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions";

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { auth, alert } = useSelector(state => state);

    const initialState = { fullname:'', username: '',email: '', password: '', cf_password: '',gender: 'male'}
    const [userData, setUserData] = useState(initialState)
    const { email, password, fullname, username, cf_password, gender} = userData;
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if(auth.token){history.push('/')}
    }, [auth.token, history])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register(userData))
    }

return (
        <div className="auth_page">
        <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Social-Media</h3>

            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" id="fullname" 
                onChange={handleInputChange} value={fullname} name="fullname"
                style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}}
                />
                <small className="form-text text-danger">{alert.fullname ? alert.fullname : ''}</small>
            </div>

            <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text" className="form-control" id="username" 
                onChange={handleInputChange} value={username.toLowerCase().replace(/ /g, '')} name="username"
                style={{background: `${alert.username ? '#fd2d6a14' : ''}`}}
                />
                <small className="form-text text-danger">{alert.username ? alert.username : ''}</small>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" 
                onChange={handleInputChange} value={email} name="email"
                style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}
                />
               <small className="form-text text-danger">{alert.email ? alert.email : ''}</small>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1" >Password</label>
                <div className="pass">
                    <input type={typePass ? "text" : "password"} className="form-control" id="exampleInputPassword1"
                    onChange={handleInputChange} value={password} name="password"
                    style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}
                    />
                    <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? 'Hide' : 'Show'}
                    </small>
                </div>
                <small className="form-text text-danger">{alert.password ? alert.password : ''}</small>
            </div>

            <div className="form-group">
                <label htmlFor="cf_password">Confirm Password</label>
                <div className="pass">
                    <input type={typeCfPass ? "text" : "password"} className="form-control" id="cf_password"
                    onChange={handleInputChange} value={cf_password} name="cf_password"
                    style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}}
                    />
                    <small onClick={() => setTypeCfPass(!typeCfPass)}>
                        {typeCfPass ? 'Hide' : 'Show'}
                    </small>
                </div>
                <small className="form-text text-danger">{alert.cf_password ? alert.cf_password : ''}</small>
            </div>

            <div className="row justify-content-between mx-0 mb-1">
                <label htmlFor="male">
                    Male: <input type="radio" id="male" name="gender"
                    value="male" defaultChecked onChange={handleInputChange} />
                </label>
                <label htmlFor="female">
                    Female: <input type="radio" id="female" name="gender"
                    value="female" onChange={handleInputChange} />
                </label>
                <label htmlFor="other">
                    Other: <input type="radio" id="other" name="gender"
                    value="other" onChange={handleInputChange} />
                </label>
            </div>

            <button type="submit" className="btn btn-dark w-100" >
                Register
            </button>

            <p className="my-2">
                You already have an account?
                <Link to="/" style={{color:"crimson"}}>Login Now</Link>
            </p>       
         </form>
     </div>
    )
}

export default Register
