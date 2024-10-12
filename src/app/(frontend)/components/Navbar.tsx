    // ./frontend/src/app/[lang]/components/Navbar.tsx

    "use client";
    import Logo from "./Logo";
    import Link from "next/link";
    import { usePathname } from "next/navigation";

    interface NavLink {
      id: number;
      url: string;
      newTab: boolean;
      text: string;
    }

    function NavLink({ url, text }: NavLink) {
      const path = usePathname();

      return (
        <li className="flex">
          <Link
            href={url}
            className={`flex items-center mx-4 -mb-1 border-b-2  ${
              path === url && ""
            }}`}
          >
            {text}
          </Link>
        </li>
      );
    }

    export default function Navbar({
      links,
      logoUrl,
      logoText,
    }: {
      links: Array<NavLink>;
      logoUrl: string | null;
      logoText: string | null;
    }) {
      return (
        <div className="p-4 bg-gradient-to-b from-zinc-100 to-transparent sticky top-0">
          <div className="w-full inline-flex justify-between h-16 mx-auto px-0">
            <ul className="items-stretch hidden lg:flex hover:*:text-yellow-400 *:transition-all *:text-xl">
              <Link href="/buy"><li>Buy</li></Link>
              <p>,&nbsp;</p>
              <Link href="/rent"><li>Rent</li></Link>
            </ul>
            <Link className="hover:*:text-yellow-400 *:transition-all" href="/">
              {logoText && <h2 className="text-2xl font-medium ">Realestate — Company</h2>}
            </Link>

            <ul className="items-stretch hidden lg:flex hover:*:text-yellow-400 *:transition-all *:text-xl">
              <Link href="/team"><li>Team</li></Link>
              <p>,&nbsp;</p>
              <Link href="/sell"><li>Sell</li></Link>
              <p>&nbsp; &nbsp; &nbsp;</p>
              <Link href="/lease" className="mt-[2px] fill-black hover:fill-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path></svg>
              </Link>
              <p>&nbsp; &nbsp; &nbsp;</p>
              <Link href="/lease" className="mt-[-8px] stroke-black hover:stroke-yellow-400"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20H45"/>
                <path d="M45 26H0"/>
              </svg></Link>&nbsp;
            </ul>
            {/* <div className="items-center flex-shrink-0 hidden lg:flex">
              <ul className="items-stretch hidden space-x-3 lg:flex">
                <li>Sell</li><p>,</p><li>Lease</li>
              </ul>
            </div> */}

            <button className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      );
    }
