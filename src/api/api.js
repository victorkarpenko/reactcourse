import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers:{
            "API-KEY": "debbad39-c8d6-4059-aada-925f0eac2782"
        }
    }
);

export const usersAPI = {
    getUsers(pageNumber=1, pageSize=10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => (response.data))
    }
};

export const authAPI = {
    getMe() {
        return  instance.get(`auth/me`).then(response => (response.data));
    }
};

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => (response.data));
    },
    unfollow(userId) {
        return  instance.delete(`follow/${userId}`).then(response => (response.data));
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => (response.data));
    }
}