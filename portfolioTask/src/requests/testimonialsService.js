import ApiRequest from './baseRequest.js';
import { TESTIMONIALS_ENDPOINT } from '../endpoints.js';

const _service = new ApiRequest();

export const getTestimonialsDetail = async () => {
    const res = await _service.get(TESTIMONIALS_ENDPOINT);
    return res.json();
};