import { useMutation } from "@tanstack/react-query";
import { request } from "../../api";
import { registerData } from "../../types/types";

export const useRegister = () => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: (data: registerData) => request
            .post('/signup', data)
            .then(res => res.data)
    })
}