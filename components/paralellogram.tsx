import { JSX } from "react";

export default function Parallelogram({
    text = "",
    className = "",
    textcolour = "text-white",
    bgcolour = "bg-purple-600",
    tag: Tag = "p"
}: {
    text: string | number;
    className?: string;
    textcolour?: string;
    bgcolour?: string;
    tag?: keyof JSX.IntrinsicElements;
}) {
    const arialabel = typeof text === "string" || typeof text === "number" ? { "aria-label": String(text) } : null;
    return (
        <div className={`text-xs skew-x-[-20deg] hover:skew-x-[30deg] transition-transform duration-300 ${bgcolour} ${className}`}
            role="presentation"
        >
            <Tag
                className={`inline-block skew-x-[10deg] hover:skew-x-[-10deg] ${textcolour}`}
                {...(arialabel || {})}
            >
                {text}
            </Tag>
        </div>
    );
}