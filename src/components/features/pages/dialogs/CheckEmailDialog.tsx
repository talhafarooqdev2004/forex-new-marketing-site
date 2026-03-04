import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui";
import { useState } from "react";
import ResetPasswordDialog from "./ResetPasswordDialog";

export default function CheckEmailDialog({
    open,
    setOpen,
}: {
    open: boolean,
    setOpen: (open: boolean) => void;
}) {
    const [isResetPasswordDialogOpen, setIsResetPasswordDialogOpen] = useState<boolean>(false);

    const resetPassword = () => {
        setIsResetPasswordDialogOpen(true);
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent id="register" variant="auth-form">
                    <DialogHeader>
                        <DialogTitle className="mb-5">Check Your Email</DialogTitle>

                        <p className="text-lg">We have sent a password reset link to your email.</p>
                    </DialogHeader>

                    <div className="px-10 mt-3">
                        <Button className="w-full" variant="auth-submit" size="auth-submit" onClick={resetPassword}>
                            SEND RESET LINK
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <ResetPasswordDialog
                open={isResetPasswordDialogOpen}
                setOpen={(open) => setIsResetPasswordDialogOpen(open)}
            />
        </>
    );
};