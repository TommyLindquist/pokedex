import { fetchAllTypes } from "@/lib/data/fetch-all-types";
import { emojiMap } from "@/lib/util";
import Link from "next/link";

export default async function ListTypes() {

    const { type } = await fetchAllTypes();

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {
                type.map(({ name }) => (
                    <Link key={name} href={`/types?pokeesByType=${name}`}
                        className="flex items-center gap-2 p-3 bg-gray-100 rounded shadow">
                        <span className="text-2xl">{emojiMap[name]}</span>
                        <span className="capitalize font-semibold">{name}</span>
                    </Link>
                ))
            }
        </div>
    )

}