import Image from "next/image";

export default function CircleImage({ url, title, w, h, className }: { url: string, title: string, w: number, h: number, className?: string }) {

    return (
        <div className={`w-32 h-32 rounded-full border-2 flex items-center justify-center overflow-hidden ${className || "border-gray-300"}`}>
            {url ? (
                <Image
                    src={url}
                    alt={title}
                    width={w}
                    height={h}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-800 text-base font-semibold">
                    Image missing ...
                </div>
            )}

        </div>
    )

}