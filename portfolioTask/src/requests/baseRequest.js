import { apiConfig } from "../apiConfig.js";

export default class UserRequest {
    async get(endPoint) {
        return await fetch(`${apiConfig.baseUrl}/${endPoint}`);
    }
};