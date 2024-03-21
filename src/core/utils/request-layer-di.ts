import {browserStorageWorker as bsWorker} from '../../storage/browser/model';
import {ACCESS_TOKEN_H, REFRESH_TOKEN_H, TRACE_ID_H} from '../constants/headers';
import {FullResponse, Indexed, Method} from '../types/common';

export async function smartRequest(
    url: string,
    method: Method,
    body?: Indexed,
): Promise<any> {
    const addBody = method === 'GET' 
        ? {} 
        : {body: JSON.stringify(body)};
    
    return fetch(url, {
        method,
        headers: {
            [TRACE_ID_H]: bsWorker.getTraceId(),
            [ACCESS_TOKEN_H]: bsWorker.getAccessToken() || '',
            [REFRESH_TOKEN_H]: bsWorker.getAccessToken() || '',
            'Content-type': 'application/json'
        },
        ...addBody,
    })
        .then(async response => {
            if (response?.ok && [200, 201].includes(response?.status)) {
                return {
                    headers: response.headers,
                    body: await response.json(),
                    error: undefined,
                };
            }
            return response;
        })
        .catch(error => {
            console.error(error);
            return {
                headers: {},
                body: undefined,
                error,
            };
        }) as Promise<FullResponse<any>>;
}
