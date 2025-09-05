"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RandomButton(
    { qs }: { qs: string[] }
) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <button className="btn-primary"
            onClick={
                () => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("random", (Math.floor(Math.random() * 100) + 1).toString()); // just a random number between 1 and 100
                    params.delete("qs");
                    qs.forEach(qsEntry => params.append('qs', qsEntry));
                    router.push(`${pathname}?${params.toString()}`, { scroll: false }); // also prevent scroll-y to flickering page...
                }
            }
        >

            <Image
                src="/Dice.svg"
                width={25}
                height={25}
                alt="Dice"
            />
            Random Pokémon</button>
    )
}
