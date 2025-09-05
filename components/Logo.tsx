import Image from "next/image";

export default function Logo({ text, src, className = "", textColor = "" }: { text: string, src: string, className?: string, textColor?: string }) {
    return (
        <div className={`flex items-center gap-3 ml-6 ${className}`}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image src={src} alt={`${text} logo`} width={100} height={100} className={`w-full h-full object-cover`} />
            </div>
            <h1 className={`text-2xl font-extrabold bg-gradient-to-r from-purple-800 to-blue-800 text-transparent bg-clip-text ${textColor}`}>
                {text}
            </h1>
        </div>
    )
}