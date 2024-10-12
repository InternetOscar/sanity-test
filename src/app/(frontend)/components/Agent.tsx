import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";

interface Author {
  id: number;
  attributes: {
    name: string;
    email: string;
    phoneNumber: string;
    positionTitle: string;
    biography: string;
  };
}

export default function TeamList({
  data: agents,
  children,
}: {
  data: Author[];
  children?: React.ReactNode;
}) {

  console.log(agents)


  return (
    <>
    <div className="h-[60px]"></div>
    {/* <section className=""> */}
      {/* <div className="col-span-"> */}
        {agents.map((agent) => {
          const name = agent.attributes.name
          const positionTitle = agent.attributes.positionTitle
          const phoneNumber = agent.attributes.phoneNumber
          const email = agent.attributes.email
          return (
            <div key={agent.id} className="col-span-3 grid-gap-20 p-2">
              <div className="border grid grid-cols-2 p-4">
                <div>
                  <h2 className="text-2xl">{name}</h2>
                  <h3 className="text-lg font-display italic">{positionTitle}</h3>
                  <p>{phoneNumber}</p>
                  <p>{email}</p>
                  {/* <p>{biography}</p> */}
                </div>
                <div className="aspect-[4/6] bg-blue-200">
                  <p>IMAGE COMING SOON</p>
                </div>

                {/* <Image alt="avatar" src={avatarUrl} width={200} height={200}></Image> */}
              </div>
            </div>
          );
        })}
      {/* </div> */}
      {children && children}
    {/* </section> */}
    </>

  );
}
