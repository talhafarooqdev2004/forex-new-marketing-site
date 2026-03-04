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
import { useLoginForm } from "@/hooks/forms";
import { cn } from "@/lib/utils";
import { AuthDialogType } from "@/types";

export default function LoginDialog({
    currentDialog,
    setCurrentDialog,
    open,
    setOpen
}: {
    currentDialog: AuthDialogType,
    setCurrentDialog: (current: AuthDialogType) => void,
    open: boolean,
    setOpen: (open: boolean) => void,
}) {
    const activeTabClass = "border-b-[3px] border-solid border-[#01C519] text-white";

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent id="register" variant="auth-form">
                <DialogHeader>
                    <DialogTitle>Welcome Back</DialogTitle>
                </DialogHeader>

                <div className="mt-5">
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            variant="dialog-switch"
                            size="dialog-switch"
                            className={cn(currentDialog === 'login' && activeTabClass)}
                            onClick={() => setCurrentDialog('login')}
                        >
                            Login
                        </Button>

                        <Button
                            variant="dialog-switch"
                            size="dialog-switch"
                            className={cn(currentDialog === 'register' && activeTabClass)}
                            onClick={() => setCurrentDialog('register')}
                        >
                            Signup
                        </Button>
                    </div>

                    <div className="px-10 mt-7">
                        <LoginForm setCurrentDialog={setCurrentDialog} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

function LoginForm({ setCurrentDialog }: { setCurrentDialog: (current: AuthDialogType) => void }) {
    const { form } = useLoginForm();

    return (
        <Form {...form}>
            <div className="flex flex-col gap-3">
                <FormField
                    control={form.control}
                    name="email"
                    render={((field) => (
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
                    ))}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={((field) => (
                        <FormItem>
                            <FormLabel>
                                Password
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

            <div className="flex justify-end mt-4">
                <div className="flex justify-end mt-4">
                    <button
                        className="text-[#01C519]"
                        onClick={() => setCurrentDialog('forgot-password')}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>

            <Button className="mt-5 w-full" variant="auth-submit" size="auth-submit">
                LOGIN
            </Button>
        </Form>
    );
}