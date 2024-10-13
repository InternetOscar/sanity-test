import { AGENTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const options = { next: { revalidate: 60 } };



export default async function Team() {
  const agents = await client.fetch(AGENTS_QUERY, {}, options);
  console.log(await client.fetch(AGENTS_QUERY, {}, options))
  console.log(agents)
  return (
    <>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
            {agents.map((agent) => (
              <li key={agent._id}>
                <Link
                  className="block p-4 hover:text-blue-500"
                  href={`/posts/${agent?.slug?.current}`}
                >
                  {agent?.name}
                </Link>
              </li>
            ))}
          </ul>
    </>
  )
}