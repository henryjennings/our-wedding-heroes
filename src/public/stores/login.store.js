import constants from '../constants/login.constants';
import BaseStore from './base.store';
import jwtDecode from 'jwt-decode';

class LoginStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._user = null;
        this._jwt = null;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case constants.LOGIN_USER:
                this._jwt = action.jwt;
                this._user = jwtDecode(this._jwt);
                this.emitChange();
                break;

            case constants.LOGOUT_USER:
                this._user = null;
                this.emitChange();
                break;

            default:
                break;
        }
    }

    get user() {
        return this._user;
    }

    get jwt() {
        return this._jwt;
    }

    isLoggedIn() {
        return !!this._user;
    }
}

export default new LoginStore();
