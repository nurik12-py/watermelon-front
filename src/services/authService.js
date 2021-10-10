import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/auth";

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem("token", jwt);
}

export function logout() {
    localStorage.removeItem("token");
}

export function getJwt() {
    return localStorage.getItem("token");
}

export function setJwt() {
    http.setJwt(getJwt());
}

export default {
    login,
    logout,
    getJwt
}