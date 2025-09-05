"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function Search({ placeholder, className = "" }: { placeholder: string, className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div className={`relative flex justify-center ${className} `}>
      <label htmlFor="search" className="sr-only">{placeholder ?? "search..."}</label>
      <input
        type="text"
        id="search"
        placeholder={placeholder ?? "search..."}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={useDebouncedCallback((e) => {
          const params = new URLSearchParams(searchParams.toString()); // for retain what is already in the url
          if (e.target.value) {
            params.set("query", e.target.value);
          } else {
            params.delete("query");
          }
          replace(`${pathname}?${params}`, { scroll: false }); // also prevent y-scroll flickering the page ...
        }, 600)}
      >
      </input>
    </div>
  )
}