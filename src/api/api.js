import * as axios from "axios";


const instance = axios.create({
    widthCredential: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6475b93a-4bb3-4e0e-a37f-1c42b4a12a21'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`/follow/${id}`)
            .then(response => response.data);
    },
    unFollow(id) {
        return instance.delete(`/follow/${id}`)
            .then(response => response.data);
    }
};