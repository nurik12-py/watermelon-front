import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";

export function getUser() {
    return http.get(apiEndpoint + "/me");
}

export function getUsers(query) {
    return http.get(`${apiEndpoint}?query=${query}`);
}

export function updateUser(data) {
    return http.put(apiEndpoint, data);
}

export function register(user) {
    return http.post(apiEndpoint, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
    })
}