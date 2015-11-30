import when from 'when';
import request from 'reqwest';
import {URL} from '../constants/weddingProfile.constants.js';
import loginStore from '../stores/login.store.js';

class WeddingProfile {
    get() {
        return when(request({
            url: URL,
            method: 'GET',
            type: 'json',
            headers: {
                'Authorization': 'Bearer ' + loginStore.jwt,
            },
        }))
        .then((response) => {
            return response;
        });
    }
}

export default new WeddingProfile();