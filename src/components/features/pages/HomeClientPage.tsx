"use client";

import { Footer, Header } from "@/components/layout/Header";
import { Button } from "@/components/ui";
import { useTheme } from "@/components/providers/ThemeProvider";
import Container from "@/components/ui/layout/Container";
import Image from "next/image";
import { useState } from "react";
import { ForgotPasswordDialog, LoginDialog, RegisterDialog } from "./dialogs";
import { AuthDialogType } from "@/types";

function WatchVideoIcon() {
    const { theme } = useTheme();
    const color = theme === "light" ? "#121417" : "white";
    return (
        <svg className="!w-6 !h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill={color} fillOpacity="0.1" />
            <path d="M12 10L21.3333 16L12 22V10Z" fill={color} stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default function HomeClientPage() {
    const [currentDialog, setCurrentDialog] = useState<AuthDialogType>(null);

    return (
        <Container>
            <Header setCurrentDialog={setCurrentDialog} />

            <div className="bg-sectionBg">
                <HeroSection setCurrentDialog={setCurrentDialog} />

                <ForexStrategies>
                    <ForexStrategy
                        title="COT Positioning"
                        smallTitle="Insights"
                    >
                        <div className="pr-8">
                            <ul className="list-disc ml-4 flex flex-col gap-4 text-[#99A1AF]">
                                <li className="leading-5">Analyze Commitments of Traders (COT) reports to see how institutional traders are positioned.</li>
                                <li className="leading-5">Spot market sentiment changes in real-time.</li>
                                <li className="leading-5">Apply positioning data to major currency pairs.</li>
                            </ul>
                        </div>
                    </ForexStrategy>
                    <ForexStrategy
                        title="Currency Seasonality"
                        smallTitle="Trends"
                    >
                        <div className="h-48 relative rounded-2xl overflow-hidden">
                            <Image src="/images/temporary/strategy.jpg" alt="Strategy Img" fill className="object-cover" />
                        </div>
                    </ForexStrategy>
                    <ForexStrategy
                        title="Technical Analysis"
                        smallTitle="Dashboard"
                    >
                        <div className="h-48 relative rounded-2xl overflow-hidden">
                            <Image src="/images/temporary/strategy.jpg" alt="Strategy Img" fill className="object-cover" />
                        </div>
                    </ForexStrategy>
                    <ForexStrategy
                        title="Retail Sentiment"
                        smallTitle="Signals"
                    >
                        <div className="pr-8">
                            <ul className="list-disc ml-4 flex flex-col gap-4 text-[#99A1AF]">
                                <li className="leading-5">Identify the strongest and weakest currencies using real-time fundamental indicators.</li>
                                <li className="leading-5">Keep tabs on central banks, CPI, sentiment driving trend shifts.</li>
                                <li className="leading-5">Determine where to go</li>
                            </ul>
                        </div>
                    </ForexStrategy>
                    <ForexStrategy
                        title="Technical Analysis"
                        smallTitle="Signals"
                    >
                        <div className="h-48 relative rounded-2xl overflow-hidden">
                            <Image src="/images/temporary/strategy.jpg" alt="Strategy Img" fill className="object-cover" />
                        </div>
                    </ForexStrategy>
                    <ForexStrategy
                        title="Trading Journals"
                        smallTitle="Strategies"
                    >
                        <div className="h-48 relative rounded-2xl overflow-hidden">
                            <Image src="/images/temporary/strategy.jpg" alt="Strategy Img" fill className="object-cover" />
                        </div>
                    </ForexStrategy>
                </ForexStrategies>

                <div className="flex items-center justify-center mt-12 pb-10">
                    <Button
                        variant="get-started-in-minutes"
                        size="get-started-in-minutes"
                        className="flex items-center gap-5"
                        onClick={() => setCurrentDialog('register')}
                    >
                        Get Started in Minutes

                        <svg className="!w-3 !h-3" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M0.666016 8.66663L4.66602 4.66663L0.666016 0.666626" stroke="#00C663" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </div>
            </div>

            <CTASection setCurrentDialog={setCurrentDialog} />

            <Footer />

            <RegisterDialog
                currentDialog={currentDialog}
                setCurrentDialog={setCurrentDialog}
                open={currentDialog === 'register'}
                setOpen={(open) => {
                    if (!open) setCurrentDialog(null);
                }}
            />

            <LoginDialog
                currentDialog={currentDialog}
                setCurrentDialog={setCurrentDialog}
                open={currentDialog === 'login'}
                setOpen={(open) => {
                    if (!open) setCurrentDialog(null);
                }}
            />

            <ForgotPasswordDialog
                open={currentDialog === 'forgot-password'}
                setOpen={(open) => {
                    if (!open) setCurrentDialog(null);
                }}
            />
        </Container>
    );
}

function HeroSection({ setCurrentDialog }: { setCurrentDialog: (current: AuthDialogType) => void }) {
    return (
        <div className="pt-36 px-10 pb-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-normal">Master Forex Trading</h1>
                <h1 className="text-greenDark font-normal mt-3">with Fundamental Insights</h1>

                <p className="max-w-xl text-[#99A1AF] mt-6 text-center leading-7 mx-auto">Get an edge in Forex trading with expert analysis, COT positions, retail sentiment, and seasonality. All the tools you need to trade like an institution.</p>

                <div className="flex items-center justify-center gap-3 mt-8">
                    <Button variant="hero-get-started" size="hero-get-started" onClick={() => setCurrentDialog('register')}>
                        Get Started

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16602 10H15.8327" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <Button variant="watch-video" size="watch-video">
                        <WatchVideoIcon />
                        Watch Video
                    </Button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-14 rounded-3xl border-2 border-solid border-white bg-black relative h-[600px]">
                <Image src="/images/temporary/hero-image.png" alt="Hero image" fill className="object-cover rounded-3xl" />
            </div>
        </div>
    );
};

function ForexStrategies({ children }: React.PropsWithChildren) {
    return (
        <div className="max-w-8xl mx-auto pt-6 px-24">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h4>Unlock Data-Driven Forex Strategies</h4>
                <p className="text-[#6A7282] mt-2">Harness insights to understand market drivers and make informed trading decisions.</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(390px,1fr))] gap-5">
                {children}
            </div>
        </div>
    );
};

function ForexStrategy({
    title,
    smallTitle,
    children
}: {
    title: string,
    smallTitle?: string,
    children: React.ReactNode
}) {
    return (
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-6 shadow-sm border border-[rgba(30,41,57,0.6)] dark:border-transparent dark:shadow-none dark:bg-darkGrey">
            <div className="flex items-center justify-between">
                <h6 className="text-xl">{title}</h6>
                <span className="text-[#6A7282] text-sm">{smallTitle}</span>
            </div>
            {children}
        </div>
    );
};

function CTASection({ setCurrentDialog }: { setCurrentDialog: (current: AuthDialogType) => void }) {
    return (
        <div className="bg-ctaBg py-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h4>Start Trading Forex the Smart Way</h4>
                    <p className="mt-2 text-[#6A7282]">Elevate your trading IQ with the data and tools designed for serious traders.</p>
                </div>

                <div className="flex items-center justify-center gap-3 mt-8">
                    <Button
                        variant="hero-get-started"
                        size="hero-get-started"
                        className="px-10"
                        onClick={() => setCurrentDialog('register')}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="watch-video"
                        size="watch-video"
                        className="px-10 bg-[rgb(218,221,226)] dark:bg-watchVideoBg border-[rgb(203,208,216)] dark:border-watchVideoBorder"
                    >
                        <WatchVideoIcon />
                        Watch Video
                    </Button>
                </div>
            </div>
        </div>
    );
};