import AppDispatcher from '../dispatchers/app.dispatcher.js';
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes.constants';
import history from '../services/history';

export default {
    loginUser: (jwt) => {
        const savedJwt = localStorage.getItem('jwt');

        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            jwt,
        });

        if (savedJwt !== jwt) {
            localStorage.setItem('jwt', jwt);

            history.replaceState(null, '/admin');
        }
    },

    logoutUser: () => {
        localStorage.removeItem('jwt');

        AppDispatcher.dispatch({
            actionType: LOGOUT_USER,
        });

        history.replaceState(null, '/admin/login');
    },
};
