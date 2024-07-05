import ApiRequest from './baseRequest.js';
import { SERVICES_ENDPOINT } from '../endpoints.js';

const _service = new ApiRequest();

export const getServicesDetail = async () => {
    const res = await _service.get(SERVICES_ENDPOINT);
    return res.json();
};