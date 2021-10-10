import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";

export function getUser() {
    return http.get(apiEndpoint + "/me");
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