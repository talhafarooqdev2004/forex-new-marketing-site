import { SvgIcon } from "@/components/composed";
import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    Input
} from "@/components/ui";
import { useForgotPasswordForm } from "@/hooks/forms";
import { useState } from "react";
import CheckEmailDialog from "./CheckEmailDialog";

export default function ForgotPasswordDialog({
    open,
    setOpen,
}: {
    open: boolean,
    setOpen: (open: boolean) => void;
}) {
    const [isCheckEmailDialogOpen, setIsCheckEmailDialogOpen] = useState<boolean>(false);

    const sendResetLink = () => {
        setIsCheckEmailDialogOpen(true);
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent id="register" variant="auth-form">
                    <DialogHeader>
                        <DialogTitle>Forgot Password</DialogTitle>
                    </DialogHeader>

                    <div className="px-10 mt-7">
                        <ForgotPasswordForm sendResetLink={sendResetLink} />
                    </div>
                </DialogContent>
            </Dialog>

            <CheckEmailDialog
                open={isCheckEmailDialogOpen}
                setOpen={open => setIsCheckEmailDialogOpen(open)}
            />
        </>
    );
};

function ForgotPasswordForm({ sendResetLink }: { sendResetLink: () => void }) {
    const { form } = useForgotPasswordForm();

    return (
        <Form {...form}>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <FormControl>
                            <div className="relative">
                                <SvgIcon icon="email" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                <Input variant="auth-form" type="email" placeholder="Email" {...field} />
                            </div>
                        </FormControl>
                    </FormItem>
                )}
            />

            <Button
                className="mt-5 w-full"
                variant="auth-submit"
                size="auth-submit"
                onClick={sendResetLink}
            >
                SEND RESET LINK
            </Button>
        </Form>
    );
};