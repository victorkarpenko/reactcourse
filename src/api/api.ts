import axios from "axios";
import {ProfileType} from "../types/types";
import {LoginDataType} from "../components/common/FormsControls/FormFields";

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
    getUsers(pageNumber=1, pageSize=10, term='') {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}&term=${term}`).then(response => (response.data))
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then(response => (response.data));
    },
    unfollow(userId: number) {
        return  instance.delete(`follow/${userId}`).then(response => (response.data));
    },

};

/*const AuthApiTypes = {
    me: type
}*/

export enum ResultsCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultsCodeCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        email: string,
        id: number,
        login: string
    },
    resultCode: ResultsCodeEnum,
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number,
    },
    resultCode: ResultsCodeEnum | ResultsCodeCaptcha,
    messages: Array<string>
}

export const authAPI = {
    getMe() {
        return  instance.get<MeResponseType>(`auth/me`).then(response => (response.data));
    },
    login(loginData: LoginDataType){
        return instance.post<LoginResponseType>(`auth/login`, {...loginData}).then(response => (response.data));
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
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => (response.data));
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(response => (response.data));
    },
    updStatus(status: string) {
        return instance.put(`profile/status`, {'status': status}).then(response => (response.data));
    },
    uploadPhoto(photo: string) {
        let formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => (response.data));
    },
    saveProfileData(profileData: ProfileType) {
        return instance.put(`profile`, profileData).then(response => (response.data))
    }
};