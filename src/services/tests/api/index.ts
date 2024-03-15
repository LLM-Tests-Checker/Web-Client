import {SERVER_DOMAIN} from '../../../core/constants/common';
import {api} from '../../../core/models/api';
import * as T from './types';

const URL_ALL = `${SERVER_DOMAIN}/api/v1/tests/my`;
const BASE_URL = `${SERVER_DOMAIN}/api/v1/test`;


class TestsAPI {
    public getMyTests(req: T.GetMyTestsRequest) {
        return api.get(URL_ALL, {query: req});
    }

    public getTestById(req: T.GetTestByIdRequest) {
        return api.get(`${BASE_URL}/${req.path.test_id}/get`, {});
    }

    public createTest(req: T.CreateTestRequest) {
        return api.put(`${BASE_URL}/create`, {})
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
