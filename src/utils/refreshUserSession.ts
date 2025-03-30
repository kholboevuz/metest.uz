import { axiosClient } from '@/http/axios';
import { IsUser, ReturnActionType } from '@/types/type';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

export const useRefreshUserSession = ({ id }: { id: string | undefined | null }) => {
    console.log(id)
    const signIn = useSignIn();

    const refreshUserSession = async (): Promise<IsUser | null> => {
        try {

            const response = await axiosClient.get<ReturnActionType>(`/get-user-by-id/${id}`);
            const updatedUserData = response.data.data;
            console.log(updatedUserData)
            const success = signIn({
                auth: {
                    token: response.data.token,
                    type: 'Bearer',
                },
                userState: updatedUserData,
            });

            if (success) {
                return updatedUserData;
            }
            return null;
        } catch (error) {
            console.error('Failed to refresh user session:', error);
            return null;
        }
    };

    return { refreshUserSession };
};