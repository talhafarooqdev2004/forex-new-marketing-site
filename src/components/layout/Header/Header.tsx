import { Button } from "@/components/ui";
import { AuthDialogType } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Header({ setCurrentDialog }: { setCurrentDialog: (current: AuthDialogType) => void }) {
    return (
        <header className="flex items-center justify-between bg-[#0c0c0d] px-6 h-20">
            <Link href="/">
                <Image src="/images/brand-logo.png" alt="Brand logo" width={70} height={70} />
            </Link>

            <nav>
                <ul className="flex items-center gap-10">
                    <li className="text-[#99A1AF]">
                        <Link href="/features">Features</Link>
                    </li>
                    <li className="text-[#99A1AF]">
                        <Link href="/analysis-tools">Analysis Tools</Link>
                    </li>
                    <li className="text-[#99A1AF]">
                        <Link href="/testimonials">Testimonials</Link>
                    </li>
                    <li className="text-[#99A1AF]">
                        <Link href="/pricing">Pricing</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-3">
                <Button variant="login" size="login" onClick={() => setCurrentDialog('login')}>
                    Login
                </Button>
                <Button variant="get-started" size="get-started" onClick={() => setCurrentDialog('register')}>
                    Get Started
                </Button>
            </div>
        </header>
    );
};