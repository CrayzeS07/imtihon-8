import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[#F6F8FA]">
        <Link href={"/components/homeapp"}>
          <button>Kirish</button>
        </Link>
      </div>
    </div>
  );
}
