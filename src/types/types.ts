export type PostType = {
    id: number,
    message: string,
    likes: number
}
export type ContactsType = {
    github: string | null,
    vk: string | null,
    facebook: string | null,
    instagram: string | null,
    twitter: string | null,
    website: string | null,
    youtube: string | null,
    mainLink: string | null,
}

export type PhotosType = {
    large: string | null,
    small: string | null,
}


export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    fullname: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    photos: PhotosType,
    userId: number
}

export type UserType = {
    id: number,
    name: string,
    status: null | string,
    photos: PhotosType,
    followed: boolean
}