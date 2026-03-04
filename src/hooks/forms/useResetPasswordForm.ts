import { useForm } from "react-hook-form";

export default function useResetPasswordForm() {
    const form = useForm({
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    return {
        form,
    };
};