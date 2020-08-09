const initState = {
    authError: ''
}

const authReducer = (state = initState, action) => {

    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return{
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Sign out success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('Sign up success');
            return{
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('Sign up error');
            return {
                ...state,
                authError: action.err.message
            }
            
        
        default: 
            return state;
    }

}

export default authReducer