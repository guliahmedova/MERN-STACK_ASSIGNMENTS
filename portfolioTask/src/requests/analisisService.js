import ApiRequest from './baseRequest.js';
import { ANALISIS_ENDPOINT } from '../endpoints.js';

const _service = new ApiRequest();

export const getAnalisisDetail = async () => {
    const res = await _service.get(ANALISIS_ENDPOINT);
    return res.json();
};