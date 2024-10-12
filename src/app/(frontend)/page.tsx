import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">

      <div className="grid grid-cols-9">
      <div className="col-span-9 h-[400px] flex-col align-center my-auto">
        <div className="mt-[90px]">
          <h3 className="m-auto w-[500px] text-xl text-center">AVAILABLE PROPERTIES IN WESTERN AUSTRALIA</h3>
          <div className="m-8 h-10">
            <form className="m-auto w-[800px] *:text-xl *:px-3 *:py-2 *:border-b *:bg-zinc-100 *:outline-none">
              <input className="w-[700px]" type="text" placeholder="Search..."></input>
              <input className="" type="submit"></input>
            </form>
            <div className="m-auto mt-8 w-full *:p-3 *:m-1 *:bg-zinc-200 *:text-xl *:rounded text-center">
              <Link href="sorrento">Sorrento</Link>
              <Link href="sorrento">Cottesloe</Link>
              <Link href="sorrento">South-West</Link>
              <Link href="sorrento">Buy</Link>
              <Link href="sorrento">Rent</Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-span-1 *:text-lg *:font-regular mx-[10px]">

        <div className="w-full h-[60px] flex">
          <p className="text-zinc-400 border-b border-black mt-auto w-full pb-2">XY Properties</p>
        </div>

        <div className="my-[20px]">
          <p className="text-zinc-400">Filter</p>
          <p>Location</p>
          <p>Bedrooms</p>
          <p>Bathrooms</p>
          <p>Garage</p>
          <p>Land Size</p>
        </div>
        <div className="mt-4 hover:border-zinc-500 text-xs border p-2 rounded text-center transition-all">
          <Link href="google.com" className="">
            List Your Property
          </Link>
        </div>
      </div>
      <div className="col-span-7">
      {/* <h1 className="text-4xl font-bold">Post index</h1> */}
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <a
              className="block p-4 hover:text-blue-500"
              href={`/posts/${post?.slug?.current}`}
            >
              {post?.title}
              <Image
                className="rounded-lg not-prose w-full h-auto"
                src={urlFor(post?.mainImage)
                  .width(600)
                  .height(400)
                  .quality(80)
                  .auto("format")
                  .url()}
                alt={post?.mainImage.alt? || ""}
                width="600"
                height="400"
              />
            </a>
          </li>
        ))}
      </ul>
      </div>
      </div>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}
