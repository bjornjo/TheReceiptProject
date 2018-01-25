export default (user = {successRespond: false}, action) => {
    switch (action.type) {

        case 'SET_USER':
            return Object.assign({}, {
                email: action.payload.email,
                isLoggedIn: action.payload.isLoggedIn
            });

        case 'CHECK_AUTH':
            console.log('CHECKING AUTHENTICATION');
            return Object.assign({}, {
                email: action.payload.email,
                isLoggedIn: action.payload.isLoggedIn
            });

        case 'LOGOUT':
            return Object.assign({}, {
                email: undefined,
                isLoggedIn: false
            });

        case 'LOGIN_FAILED':
            return Object.assign({}, {
                loginError: action.payload.error
            });

        case 'REGISTER_FAILED':
            return Object.assign({}, {
                registerError: action.payload.error
            });

        case 'REGISTER_SUCCESS':
            return Object.assign({}, {
                successRespond: action.payload.successRespond,
                successCreation: action.payload.successCreation
            });

        default:
            return user;
    }
}