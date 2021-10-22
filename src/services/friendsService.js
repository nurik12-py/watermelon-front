import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/friends";

export function getFriends() {
    return http.get(apiEndpoint);
}

export function addFriend(data) {
    return http.post(apiEndpoint, data);
}

export function removeFriend(id) {
    return http.delete(`${apiEndpoint}/?friendId=${id}`);
}