"use client";

import { Button, Switch } from "@/components/ui";
import { useTheme } from "@/components/providers/ThemeProvider";
import { AuthDialogType } from "@/types";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ setCurrentDialog }: { setCurrentDialog: (current: AuthDialogType) => void }) {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="flex items-center justify-between bg-background px-6 h-20 text-foreground border-b border-stroke">
            <Link href="/">
                <Image
                    src={theme === "light" ? "/images/brand-logo-black.png" : "/images/brand-logo.png"}
                    alt="Brand logo"
                    width={70}
                    height={70}
                />
            </Link>

            <nav>
                <ul className="flex items-center gap-10">
                    <li className="text-foreground/70 hover:text-foreground transition-colors">
                        <Link href="/features">Features</Link>
                    </li>
                    <li className="text-foreground/70 hover:text-foreground transition-colors">
                        <Link href="/analysis-tools">Analysis Tools</Link>
                    </li>
                    <li className="text-foreground/70 hover:text-foreground transition-colors">
                        <Link href="/testimonials">Testimonials</Link>
                    </li>
                    <li className="text-foreground/70 hover:text-foreground transition-colors">
                        <Link href="/pricing">Pricing</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-3">
                {mounted && (
                    <div className="flex items-center gap-2" aria-label="Toggle theme">
                        <Sun className="h-4 w-4 text-foreground/70" aria-hidden />
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={toggleTheme}
                            aria-label="Toggle dark mode"
                        />
                        <Moon className="h-4 w-4 text-foreground/70" aria-hidden />
                    </div>
                )}
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