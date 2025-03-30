export interface IsUser {
    telegram_id: number;
    telegram: boolean;
    _id: string;
    fullname: string;
    phonenumber: number;
    password: string;
    old: boolean;
    date: string;
    balance: number;
    user_id: number;
    createdAt: string;
    updatedAt: string;
    attempts: number;
    __v: number;
}

export interface ReturnActionType {
    status: boolean;
    data: IsUser;
    message: string;
    token: string;
}