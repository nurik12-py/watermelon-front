import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/room";

export function getRoom(roomId) {
    return http.get(apiEndpoint + "/" + roomId);
}

export function getRooms(query) {
    return http.get(apiEndpoint + "/?roomName=" + query);
}

export function createRoom(name, isPrivate) {
    return http.post(apiEndpoint, {
        name: name,
        isPrivate: isPrivate
    })
}