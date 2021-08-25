const initState = {
    authError:null
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login error');
            console.log(action);
            return{
                ...state,
                authError:'Login failed!'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            console.log(action);
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('logout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup success');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error');
            console.log(action);
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
}

export default authReducer;