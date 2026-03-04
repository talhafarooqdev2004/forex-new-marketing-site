import { useForm } from "react-hook-form";

export default function useRegisterForm() {
    const form = useForm({
        defaultValues: {
            firstName: "",
            email: "",
            password: "",
            confirmPassword: "",
            country: "",
        }
    });

    return {
        form,
    };
};