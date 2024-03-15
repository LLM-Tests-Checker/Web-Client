import {SERVER_DOMAIN} from '../../../core/constants/common';
import {api} from '../../../core/models/api';
import {SignInRequest, SignUpRequest} from './types';

const BASE_URL = `${SERVER_DOMAIN}/api/v1/auth`;

class AuthAPI {
    public async signIn(req: SignInRequest) {
        console.log('y')
        return api.post(`${BASE_URL}/sign-in`, {body: req});
    }

    public async signUp(req: SignUpRequest) {
        return api.post(`${BASE_URL}/sign-up`, {body: req});
    }

    public async refreshToken() {
        return api.post(`${BASE_URL}/refresh-token`, {});
    }
}

export const authAPI = new AuthAPI();
