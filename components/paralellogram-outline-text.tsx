import { JSX } from "react";
import TextOutliner from "./text-outliner";

type ParallelogramOutlineTextProps = {
    text: string | number;
    className?: string;
    textcolour?: string;
    bgcolour?: string;
    tag?: keyof JSX.IntrinsicElements;
    textOutlinerProps?: Partial<Parameters<typeof TextOutliner>[0]>; // Type-safe forwarding
};

export default function ParallelogramOutlineText({
    text = "",
    className = "",
    textcolour = "text-white",
    bgcolour = "bg-purple-600",
    tag: Tag = "p",
    textOutlinerProps = {}
}: ParallelogramOutlineTextProps) {
    const arialabel = typeof text === "string" || typeof text === "number" ? { "aria-label": String(text) } : null;
    return (
        <div className={`text-xs skew-x-[-20deg] hover:skew-x-[30deg] transition-transform duration-300 ${bgcolour} ${className}`}
            role="presentation"
        >
            <Tag
                className={`inline-block skew-x-[10deg] hover:skew-x-[-10deg] ${textcolour}`}
                {...(arialabel || {})}
            >
                <TextOutliner text={text} {...textOutlinerProps} />
            </Tag>
        </div>
    );
}