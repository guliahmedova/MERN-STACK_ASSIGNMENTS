import ApiRequest from './baseRequest.js';
import { ABOUT_ENDPOINT } from '../endpoints.js';

const _service = new ApiRequest();

export const getAboutDetail = async () => {
    const res = await _service.get(ABOUT_ENDPOINT);
    return res.json();
};