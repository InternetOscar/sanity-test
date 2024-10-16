"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}

      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/${attributes.slug}`}
        className=""
      >
        {attributes.name}
      </Link>
    </li>
  );
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {

  return (
    <footer className="py-6 bg-white grid grid-cols-5 gap-[40px] px-[40px] *:cursor-pointer">
      <div className="border-t border-black">
        <p className="uppercase font-light my-5">social</p>
        <ul className="*:text-2xl *:font-light">
          <li>Instagram</li>
          <li>Pinterest</li>
          <li>Tiktok</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Threads</li>
          <li>X (Twitter)</li>
        </ul>
      </div>
      <div className="border-t border-black">
      <p className="uppercase font-light my-5">about us</p>
        <ul className="*:text-2xl *:font-light">
          <li>Our team</li>
          <li>Giving back</li>
          <li>History</li>
          <li>Investments</li>
        </ul>
      </div>
      <div className="border-t border-black">
      <p className="uppercase font-light my-5">properties</p>
        <ul className="*:text-2xl *:font-light">
          <li>Sell a property</li>
          <li>Rent a property</li>
          <li>Buy a property</li>
          <li>Lease a property</li>
        </ul>
      </div>
      <div className="border-t border-black">
      <p className="uppercase font-light my-5">support</p>
        <ul className="*:text-2xl *:font-light">
          <li>Customer care</li>
          <li>Our process</li>
          <li>General enquiries</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="border-t border-black">
      <p className="uppercase font-light my-5">newsletter</p>
        <form className="flex">
          <input className="w-full border-t border-l border-b border-zinc-500 px-3 py-1 text-sm font-light rounded-l focus:outline-0 focus:ring-transparent ring-0" placeholder="EMAIL ADDRESS" type="email"></input>
          <input type="submit" value="enter" className="border-t border-r border-b border-zinc-500 rounded-r pr-3 text-zinc-500 font-light text-sm uppercase focus:outline-0 focus:ring-transparent ring-0" required="required"></input>
        </form>
      </div>

    </footer>
    // <footer className="py-6 bg-white">
    //   <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
    //     <div className="grid grid-cols-12">
    //       <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
    //         <Logo src={logoUrl}>
    //           {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
    //         </Logo>
    //       </div>

    //       <div className="col-span-6 text-center md:text-left md:col-span-3">
    //         <p className="pb-1 text-lg font-medium">Categories</p>
    //         <ul>
    //           {categoryLinks.map((link: CategoryLink) => (
    //             <CategoryLink key={link.id} {...link} />
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="col-span-6 text-center md:text-left md:col-span-3">
    //         <p className="pb-1 text-lg font-medium">Menu</p>
    //         <ul>
    //           {menuLinks.map((link: FooterLink) => (
    //             <FooterLink key={link.id} {...link} />
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="grid justify-center pt-6 lg:justify-between">
    //       <div className="flex">
    //         <span className="mr-2">
    //           ©{new Date().getFullYear()} All rights reserved
    //         </span>
    //         <ul className="flex">
    //           {legalLinks.map((link: FooterLink) => (
    //             <Link
    //               href={link.url}
    //               className="text-gray-400 hover:text-gray-300 mr-2"
    //               key={link.id}
    //             >
    //               {link.text}
    //             </Link>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
    //         {socialLinks.map((link: FooterLink) => {
    //           return (
    //             <a
    //               key={link.id}
    //               rel="noopener noreferrer"
    //               href={link.url}
    //               title={link.text}
    //               target={link.newTab ? "_blank" : "_self"}
    //               className="flex items-center justify-center w-10 h-10 rounded-full"
    //             >
    //               <RenderSocialIcon social={link.social} />
    //             </a>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
