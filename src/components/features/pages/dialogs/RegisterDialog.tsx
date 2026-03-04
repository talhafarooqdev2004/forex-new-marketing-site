import { CommandPopover, SvgIcon } from "@/components/composed";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, Input } from "@/components/ui";
import { Dialog, DialogTitle, DialogContent, DialogHeader } from "@/components/ui";
import { useRegisterForm } from "@/hooks/forms";
import { cn } from "@/lib/utils";
import { AuthDialogType } from "@/types";

export default function RegisterDialog({
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
                    <DialogTitle>Create Your Account</DialogTitle>
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
                        <RegisterForm setCurrentDialog={setCurrentDialog} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

function RegisterForm({ setCurrentDialog }: { setCurrentDialog: (current: AuthDialogType) => void }) {
    const { form } = useRegisterForm();

    return (
        <Form {...form}>
            <div className="flex flex-col gap-3">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <SvgIcon icon="firstName" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                    <Input variant="auth-form" placeholder="Name" {...field} />
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <SvgIcon icon="email" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                    <Input type="email" variant="auth-form" placeholder="Email" {...field} />
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <SvgIcon icon="password" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                    <Input type="password" variant="auth-form" placeholder="Password" {...field} />
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <SvgIcon icon="password" className="absolute top-1/2 -translate-y-1/2 left-4" />
                                    <Input type="password" variant="auth-form" placeholder="Password" {...field} />
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <CommandPopover control={form.control} />
            </div>

            <div className="flex justify-end mt-4">
                <button
                    className="text-[#01C519]"
                    onClick={() => setCurrentDialog('forgot-password')}
                >
                    Forgot Password?
                </button>
            </div>

            <Button className="mt-5 w-full" variant="auth-submit" size="auth-submit">
                CREATE ACCOUNT
            </Button>
        </Form>
    );
};