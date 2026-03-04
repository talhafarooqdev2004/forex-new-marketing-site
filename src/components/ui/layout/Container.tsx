import clsx from "clsx";
import { ContainerProps } from "./Container.types";

export default function Container({
    children,
    className = "",
}: ContainerProps) {

    return (
        <div
            className={clsx(
                className,
            )}
        >
            {children}
        </div>
    );
}