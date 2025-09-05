import Link from "next/link"

const linkList = [
    { href: "/", label: "Home" },
    { href: "/", label: "Pokedex" },
    { href: "/types", label: "Types" },
    { href: "/favourites", label: "Favourites" },
];

export default function NavMain({ className = "" }: { className?: string }) {
    return (
        <nav className={`flex gap-6 mr-6 text-gray-700 font-medium ${className}`}>

            <ul className="flex gap-4">
                {linkList.map((link, idx) => (
                    <li key={idx}>
                        <Link
                            className="hover:text-blue-600"
                            href={link.href}
                        >
                            {link.label}
                        </Link>

                    </li>
                ))}
            </ul>
        </nav>
    )
}