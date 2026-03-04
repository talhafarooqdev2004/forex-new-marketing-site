import { useForm } from "react-hook-form";

export default function useForgotPasswordForm() {
    const form = useForm({
        defaultValues: {
            email: "",
        }
    });

    return {
        form,
    };
};