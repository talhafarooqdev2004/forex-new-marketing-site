import { SectionProps } from "./Section.types";

export default function Section({ children, className }: SectionProps) {
    return (
        <section className={className}>
            {children}
        </section>
    )
}