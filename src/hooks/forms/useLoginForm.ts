import { useForm } from "react-hook-form";

export default function useLoginForm() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    return {
        form,
    };
};