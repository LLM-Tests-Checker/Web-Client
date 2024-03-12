import {SERVER_DOMAIN} from '../../../core/constants/common';
import * as T from './types';

const URL_ALL = `${SERVER_DOMAIN}/api/v1/tests/my`;
const BASE_URL = `${SERVER_DOMAIN}/api/v1/test`;


class TestsAPI {
    public getMyTests(req: T.GetMyTestsRequest): Promise<T.GetMyTestsResponse> {
        return fetch(URL_ALL, {
            headers: {
                'AccessToken': ''
            }
        })
            .then(data => data.json() as unknown)
            .then(data => data as T.GetMyTestsResponse)
            .catch(_ => []);
    }

    public getTestById() {

    }

    public createTest() {

    }

    public deleteTestById() {

    }

    public llmLaunchTestById() {

    }

    public llmGetTestStatusById() {

    }

    public llmGetTestResultById() {

    }
}

export default TestsAPI;
