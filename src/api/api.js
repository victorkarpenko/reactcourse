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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => (response.data));
    },
    unfollow(userId) {
        return  instance.delete(`follow/${userId}`).then(response => (response.data));
    },

};

export const authAPI = {
    getMe() {
        return  instance.get(`auth/me`).then(response => (response.data));
    },
    login(loginData){
        return instance.post(`auth/login`, {...loginData}).then(response => (response.data));
    },
    logout(){
        return instance.delete(`auth/login`).then(response => response.data);
    }
};

export const securityAPI = {
    getCaptcha(){
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => (response.data));
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => (response.data));
    },
    updStatus(status) {
        return instance.put(`profile/status`, {'status': status}).then(response => (response.data));
    },
    uploadPhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => (response.data));
    },
    saveProfileData(profileData) {
        return instance.put(`profile`, profileData).then(response => (response.data))
    }
};