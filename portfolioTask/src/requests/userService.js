import ApiRequest from './baseRequest.js';
import { USER_ENDPOINT } from '../endpoints.js';

const _service = new ApiRequest();

export const getUserDetail = async () => {
    const res = await _service.get(USER_ENDPOINT);
    return res.json();
};