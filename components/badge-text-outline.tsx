import { JSX } from "react";
import TextOutliner from "./text-outliner";

type BadgeTextOutlineProps = {
    text: string | number;
    className?: string;
    textcolour?: string;
    bgcolour?: string;
    tag?: keyof JSX.IntrinsicElements;
    textOutlinerProps?: Partial<Parameters<typeof TextOutliner>[0]>; // Type-safe forwarding
}

export default function BadgeTextOutline({
    text = "",
    className = "",
    textcolour = "text-white",
    bgcolour = "bg-purple-600",
    tag: Tag = "section",
    textOutlinerProps = {}
}: BadgeTextOutlineProps) {
    const arialabel = typeof text === "string" || typeof text === "number" ? { "aria-label": String(text) } : null;
    return (
        <Tag
            className={`px-2 py-1 rounded-full text-xs font-semibold ${textcolour} ${bgcolour} ${className}`}
            {...(arialabel || {})}
        >
            <TextOutliner text={text} {...textOutlinerProps} />
        </Tag>
    )
}