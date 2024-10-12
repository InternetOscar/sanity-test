    // ./frontend/src/app/[lang]/components/PostList.tsx

    import Image from "next/image";
    import Link from "next/link";
    import { getStrapiMedia, formatDate } from "../utils/api-helpers";

    interface Article {
      id: 4;
      attributes: {
        title: string;
        guidePrice: string;
        state: string;
        beds: number;
        bath: number;
        cars: number;
        architect: string;
        photography: string;
        interiorDesign: string;
        streetAddress: string;
        suburb: string;
        nearestCity: string;
        descShort: string;
        description: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        cover: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        category: {
          data: {
            attributes: {
              name: string;
              slug: string;
            };
          };
        };
        authorsBio: {
          data: {
            attributes: {
              name: string;
              avatar: {
                data: {
                  attributes: {
                    url: string;
                  };
                };
              };
            };
          };
        };
      };
    }

    export default function PostList({
      data: articles,
      children,
    }: {
      data: Article[];
      children?: React.ReactNode;
    }) {
      return (
        <>
        <div className="h-[60px]"></div>
        <section className="">
          <div className="grid">
            {articles.map((article) => {
              const imageUrl = getStrapiMedia(
                article.attributes.cover.data?.attributes.url
              );

              const category = article.attributes.category.data?.attributes;
              const authorsBio = article.attributes.authorsBio.data?.attributes;

              const avatarUrl = getStrapiMedia(
                authorsBio?.avatar.data.attributes.url
              );

              return (
                <>

                  <Link className="group grid grid-cols-12 py-4 mx-4 border-t border-black" href={`${category?.slug}/${article.attributes.slug}`}>
                    <div className="col-span-4">
                      <h3 className="mt-[-5px] font-medium text-2xl group-hover:text-yellow-400 transition-all">{article.attributes.streetAddress}</h3>
                      <p className="font-regular text-2xl">{article.attributes.suburb}</p>
                      <p className="font-regular text-2xl">{article.attributes.nearestCity}</p>
                      <p className="mt-5 text-lg font-regular ">{article.attributes.descShort}</p>
                      <div className="mt-5 grid grid-cols-2 *:font-regular *:text-lg">
                        <p>Location</p><p>{article.attributes.suburb}</p>
                        <p>Beds</p><p>{article.attributes.beds}</p>
                        <p>Bath</p><p>{article.attributes.bath}</p>
                        <p>Cars</p><p>{article.attributes.cars}</p>
                        <p>Guide Price</p><p>${article.attributes.guidePrice}</p>
                      </div>
                    </div>

                    <Image
                      alt="presentation"
                      width="1200"
                      height="900"
                      className="object-cover w-full col-span-8 pl-8 aspect-[9/6]"
                      src={imageUrl}/>
                    </Link>
                </>
              );
            })}
          </div>
          {children && children}
        </section>
        </>

      );
    }
