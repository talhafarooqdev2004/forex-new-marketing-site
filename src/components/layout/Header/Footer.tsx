import { Button, Input } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-grey px-6 py-20">
            <div className="flex flex-wrap items-start justify-between gap-14">
                <div className="flex flex-col gap-4 flex-1">
                    <Link href="/">
                        <Image src="/images/brand-logo.png" alt="Brand logo" width={70} height={70} />
                    </Link>

                    <p className="text-[#6A7282]">
                        Master the forex markets with institutional-grade data, sentiment analysis, and advanced fundamental tracking.
                    </p>

                    <div className="flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M18.3327 3.33319C18.3327 3.33319 17.7493 5.08319 16.666 6.16652C17.9993 14.4999 8.83268 20.5832 1.66602 15.8332C3.49935 15.9165 5.33268 15.3332 6.66602 14.1665C2.49935 12.9165 0.416016 7.99986 2.49935 4.16652C4.33268 6.33319 7.16602 7.58319 9.99935 7.49986C9.24935 3.99986 13.3327 1.99986 15.8327 4.33319C16.7493 4.33319 18.3327 3.33319 18.3327 3.33319Z"
                                stroke="#4A5565"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_159_8430)">
                                <path
                                    d="M15.0007 1.6665H12.5007C11.3956 1.6665 10.3358 2.10549 9.55437 2.88689C8.77297 3.66829 8.33398 4.7281 8.33398 5.83317V8.33317H5.83398V11.6665H8.33398V18.3332H11.6673V11.6665H14.1673L15.0007 8.33317H11.6673V5.83317C11.6673 5.61216 11.7551 5.4002 11.9114 5.24391C12.0677 5.08763 12.2796 4.99984 12.5007 4.99984H15.0007V1.6665Z"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_159_8430">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_159_8432)">
                                <path
                                    d="M14.166 1.6665H5.83268C3.5315 1.6665 1.66602 3.53198 1.66602 5.83317V14.1665C1.66602 16.4677 3.5315 18.3332 5.83268 18.3332H14.166C16.4672 18.3332 18.3327 16.4677 18.3327 14.1665V5.83317C18.3327 3.53198 16.4672 1.6665 14.166 1.6665Z"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M13.3337 9.47525C13.4366 10.1688 13.3181 10.8771 12.9952 11.4994C12.6723 12.1218 12.1614 12.6264 11.5351 12.9416C10.9088 13.2569 10.1991 13.3666 9.5069 13.2552C8.81468 13.1438 8.17521 12.817 7.67944 12.3212C7.18367 11.8255 6.85685 11.186 6.74546 10.4938C6.63408 9.80154 6.74379 9.09183 7.05901 8.46556C7.37423 7.8393 7.8789 7.32837 8.50123 7.00545C9.12356 6.68254 9.83187 6.56407 10.5254 6.66692C11.2328 6.77182 11.8878 7.10147 12.3935 7.60717C12.8992 8.11288 13.2288 8.76782 13.3337 9.47525Z"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.584 5.4165H14.5923"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_159_8432">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_159_8436)">
                                <path
                                    d="M13.334 6.6665C14.6601 6.6665 15.9318 7.19329 16.8695 8.13097C17.8072 9.06865 18.334 10.3404 18.334 11.6665V17.4998H15.0007V11.6665C15.0007 11.2245 14.8251 10.8006 14.5125 10.488C14.1999 10.1754 13.776 9.99984 13.334 9.99984C12.892 9.99984 12.468 10.1754 12.1555 10.488C11.8429 10.8006 11.6673 11.2245 11.6673 11.6665V17.4998H8.33398V11.6665C8.33398 10.3404 8.86077 9.06865 9.79845 8.13097C10.7361 7.19329 12.0079 6.6665 13.334 6.6665Z"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.99935 7.5H1.66602V17.5H4.99935V7.5Z"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.33268 4.99984C4.25316 4.99984 4.99935 4.25365 4.99935 3.33317C4.99935 2.4127 4.25316 1.6665 3.33268 1.6665C2.41221 1.6665 1.66602 2.4127 1.66602 3.33317C1.66602 4.25365 2.41221 4.99984 3.33268 4.99984Z"
                                    stroke="#4A5565"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_159_8436">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="flex-1">
                    <span className="font-semibold block mb-6">Product</span>
                    <ul className="flex flex-col gap-4 text-[#6A7282]">
                        <li>Analysis Tools</li>
                        <li>COT Tracking</li>
                        <li>Economic Calendar</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className="flex-1">
                    <span className="font-semibold block mb-6">Company</span>
                    <ul className="flex flex-col gap-4 text-[#6A7282]">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                    <span className="font-semibold block">Newsletter</span>
                    <p className="text-[#6A7282]">Get the latest market insights delivered weekly.</p>
                    <div className="h-12 flex items-center gap-3">
                        <Input variant="newsletter" placeholder="Email address" />
                        <Button variant="newsletter-subscribe" size="newsletter-subscribe">
                            <svg className="!w-6 !h-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.16602 10H15.8327" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-24 flex justify-between items-center">
                <p className="text-[#6A7282]">© 2026 ForexEdge. All rights reserved.</p>
                <nav className="flex items-center gap-5 text-[#6A7282]">
                    <Link href="/terms">Terms</Link>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/cookies">Cookies</Link>
                </nav>
            </div>
        </footer>
    );
};