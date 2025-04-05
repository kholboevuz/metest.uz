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


interface Part1Question {
    question: string;
    time: number;
    audio: string;
    freetime: number;
    _id: string;
}

interface BasicQuestion {
    question: string;
    _id: string;
}
export interface ExamType {
    _id: string;
    language: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    exam: {
        part1_1: Part1Question[];
        part1_2: {
            image1: string;
            image2: string;
            question: Part1Question[];
        };
        part2: {
            question: BasicQuestion[];
            time: number;
            audio: string;
            freetime: number;
            image3: string;
        };
        part3: {
            question: string;
            time: number;
            audio: string;
            freetime: number;
            for: BasicQuestion[];
            against: BasicQuestion[];
        };
    };
}
