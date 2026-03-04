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
    Input,
} from "@/components/ui";
import { useResetPasswordForm } from "@/hooks/forms";

export default function ResetPasswordDialog({
    open,
    setOpen
}: {
    open: boolean,
    setOpen: (open: boolean) => void,
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent id="register" variant="auth-form">
                <DialogHeader>
                    <DialogTitle>Reset Password</DialogTitle>
                </DialogHeader>

                <div className="px-10 mt-7">
                    <LoginForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};

function LoginForm() {
    const { form } = useResetPasswordForm();

    return (
        <Form {...form}>
            <div className="flex flex-col gap-3">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                New Password
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <SvgIcon icon="password" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                    <Input variant="auth-form" type="password" placeholder="Password" {...field} />
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={((field) => (
                        <FormItem>
                            <FormLabel>
                                Confirm Password
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <SvgIcon icon="password" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                    <Input variant="auth-form" type="password" placeholder="Password" {...field} />
                                </div>
                            </FormControl>
                        </FormItem>
                    ))}
                />
            </div>

            <Button className="mt-5 w-full" variant="auth-submit" size="auth-submit">
                RESET PASSWORD
            </Button>
        </Form>
    );
};