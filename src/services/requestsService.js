import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/requests";

export function getRequests() {
    return http.get(apiEndpoint);
}

export function makeRequest(data) {
    return http.post(apiEndpoint, data);
}

export function rejectRequest(id) {
    return http.delete(`${apiEndpoint}/?friendId=${id}`);
}