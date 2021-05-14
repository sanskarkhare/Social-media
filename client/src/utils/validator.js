const validator = ({email, password, fullname, username, cf_password}) => {
    const err = {}

    if(!fullname){
        err.fullname = "Please add your fullname."
    }else if(fullname.length > 25){
        err.fullname = "Fullname exceeds 25 character."
    }

    if(!username){
        err.username = "Please add your username."
    }else if(username.length > 25){
        err.username = "Username exceeds 25 character."
    }

    if(!email){
        err.email = "Please add your email!"
    } else if(!validateEmail(email)){
        err.email = "Email format is incorrect!"
    }

    if(!password){
        err.password = "Please add your password"
    } else if(password.length < 6){
        err.password = "Password should be more than 6 words."
    }

    if(password !== cf_password){
        err.cf_password = "Confirm Password do not match"
    }

    return{
        errMsg: err,
        errLength: Object.keys(err).length
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

export default validator;