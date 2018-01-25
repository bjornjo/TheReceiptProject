import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

var emailValidated = false;
var activatedForm = false;

const actions = {

    onSignup(email) {

        console.log(email);
        return (dispatch) => {

            fetch('/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            })
                .then(res => res.text())
                .then(respond => {
                    try {
                        //IF REGISTER SUCCESS
                        dispatch(actions.registerSuccess(respond))

                        setTimeout(function(){
                            dispatch(actions.clearSuccess())
                        }, 5000)
                    } catch (err) {
                        dispatch(actions.registerFailed(respond))
                    }
                })
        }
    },

    clearSuccess(){
        return {
            type: 'REGISTER_SUCCESS',
            payload: {
                successCreation: false
            }
        }
    },

    registerSuccess(successRespond){
        return {
            type: 'REGISTER_SUCCESS',
            payload: {
                successRespond: successRespond,
                successCreation: true
            }
        }
    },

    registerFailed(error){
        return {
            type: 'REGISTER_FAILED',
            payload: {
                error: error
            }
        }
    }
};

export default actions;