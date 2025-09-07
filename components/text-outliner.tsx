import { JSX } from "react";

type TextOutlinerProps = {
  text: string | number;
  className?: string;
  outlineStrength?: number;
  multiplier?: number;
  textcolour?: string;
  outlinecolour?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export default function TextOutliner({
  text,
  className = "text-3xl font-bold",
  outlineStrength = 4,
  multiplier = 1.5,
  textcolour = "text-white",
  outlinecolour = "text-black",
  tag: Tag = "p"
}: TextOutlinerProps) {
  const offsets = Array.from({ length: outlineStrength }, (_, i) => {
    const angle = (i / outlineStrength) * 2 * Math.PI
    const x = Math.round(Math.cos(angle) * multiplier)
    const y = Math.round(Math.sin(angle) * multiplier)
    return { x, y }
  })

  const arialabel = typeof text === "string" || typeof text === "number" ? { "aria-label": String(text) } : null;
  return (
    <section className={"relative inline-block"}>
      {offsets.map((offset, i) => (
        <div
          key={i}
          aria-hidden="true"
          role="presentation" /* Reinforces purely visual and should be ignored by screen readers ... */
          className={`absolute inset-0 ${outlinecolour} select-none pointer-events-none ${className}`}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          {text}
        </div>
      ))}
      <Tag className={`relative ${textcolour} ${className}`}
        {...(arialabel || {})}
      >
        {text}
      </Tag>
    </section>
  )
}