import AppDispatcher from '../dispatchers/app.dispatcher';
import constants from '../constants/login.constants';

export default {
    loginUser: (jwt) => {
        const savedJwt = localStorage.getItem('jwt');

        AppDispatcher.dispatch({
            actionType: constants.LOGIN_USER,
            jwt: jwt,
        });

        if (savedJwt !== jwt) {
            localStorage.setItem('jwt', jwt);
        }
    },

    logoutUser: () => {
        localStorage.removeItem('jwt');

        AppDispatcher.dispatch({
            actionType: constants.LOGOUT_USER,
        });
    },
};
