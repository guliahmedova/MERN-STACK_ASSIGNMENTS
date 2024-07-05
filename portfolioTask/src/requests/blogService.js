import ApiRequest from './baseRequest.js';
import { BLOGS_ENDPOINT } from '../endpoints.js';

const _service = new ApiRequest();

export const getBlogDetail = async () => {
    const res = await _service.get(BLOGS_ENDPOINT);
    return res.json();
};