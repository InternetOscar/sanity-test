"use client"
import { formatDate, getStrapiMedia } from '@/app/[lang]/utils/api-helpers';
import { postRenderer } from '@/app/[lang]/utils/post-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { createElement } from 'react';
import EnquireNowDialog from './EnquireNowDialog';

interface Article {
    id: number;
    attributes: {
        streetAddress: string;
        suburb: string;
        title: string;
        description: string;
        slug: string;
        guidePrice: string;
        nearestCity: string;
        state: string;
        beds: number;
        bath: number;
        cars: number;
        architect: string;
        photography: string;
        interiorDesign: string;
        fullDescription: string;
        cover: {
            data: {
                attributes: {
                    url: string;
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
        blocks: any[];
        publishedAt: string;
        interiorPictures: any[];
        detailPictures: any[];
        first_amenity: any[];
        firstAmenity: string;
        driveDistance_1: string;
        walkDistance_1: string;
        secondAmenity: string;
        driveDistance_2: string;
        walkDistance_2: string;
        thirdAmenity: string;
        walkDistance_3: string;
        driveDistance_3: string;
    };
}

export default function Post({ data }: { data: Article }) {
    const { title, description, publishedAt, cover, authorsBio, streetAddress, suburb, nearestCity, state, beds, bath, cars, architect, photography, interiorDesign, guidePrice, fullDescription, firstAmenity, secondAmenity, thirdAmenity, driveDistance_1, driveDistance_2, driveDistance_3, walkDistance_1, walkDistance_2, walkDistance_3} = data.attributes;
    const author = authorsBio.data?.attributes;
    const imageUrl = getStrapiMedia(cover.data?.attributes.url);
    const authorImgUrl = getStrapiMedia(authorsBio.data?.attributes.avatar.data.attributes.url);

    var fixedDescription = ""
    for (let i = 0; i < fullDescription.length; i++) {
        fixedDescription += "<p>" + fullDescription[i].children[0].text + "</p>";
    }

    // console.log(data.attributes)

    return (
        <article className=" m-[20px]">
            <div className='text-center h-[700px] grid grid-cols-4 border-b border-black mb-[20px]'>
                <div className='mt-auto text-left col-span-1 pb-[12px]'>


                    <p>Listed:</p>
                    <p className='font-display font-light text-lg'>23 Jan, 2024</p>
                    <div className='inline-flex'>
                        <svg className='mr-[15px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"></path></svg>
                    </div>
                </div>
                <div className='m-auto col-span-2'>
                    <h1 className="leading-tight text-8xl italic font-display font-light block">{streetAddress}</h1>
                    <h2 className="leading-tight text-8xl font-display font-light">{suburb}</h2>
                    <p className='uppercase m-8'>{nearestCity}, {state}</p>
                    <div>
                        <span className='bg-zinc-200 px-2 py-1 font-regular text-2xl rounded-md'>For Sale</span>
                    </div>
                </div>
                <div className='col-span-1'>

                </div>

            </div>
            <div className='flex w-full h-[950px] object-cover overflow-hidden rounded-lg items-center'>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article cover image"
                    width={1500}
                    height={1200}
                    className="w-full pb-[240px]"
                />
            )}
            </div>


            <div className="grid grid-cols-4">
                <div className='mt-[57px] mr-[60px] sticky top-[80px]'>
                    <ul className='grid grid-cols-2 *:text-lg *:font-regular'>
                        <li>Beds</li>
                        <li>{beds}</li>
                        <li>Baths</li>
                        <li>{bath}</li>
                        <li>Cars</li>
                        <li>{cars}</li>
                        <li>Photos</li>
                        <li>{photography}</li>
                        <li>Interior Design</li>
                        <li>{interiorDesign}</li>
                        <li>Architect</li>
                        <li>{architect}</li>
                        <li>Agent</li>
                        <li>{author.name}</li>
                        <li>List Price</li>
                        <li>${guidePrice}</li>
                    </ul>
                    <div className='mt-8'>
                        <span className='border px-10 py-2 uppercase rounded-md hover:border-zinc-500 transition-all cursor-grab active:cursor-grabbing'>Enquire Now</span>
                    </div>
                </div>
                <p className='text-5xl font-display font-light col-start-2 col-end-5 mt-[60px]'>{description}</p>
                <div className='col-start-2 col-end-4 text-2xl font-display font-light mt-[-70px] *:pb-5'
                    dangerouslySetInnerHTML={{__html: fixedDescription}}>
                </div>
                <div className='flex flex-nowrap overflow-auto col-start-2 col-end-5 my-[50px] mr-[-20px] *:mb-5/\\swvaq    `45[\-\01    *:mr-8 *:h-[600px] *:w-[900px]'>
                    {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
                </div>
                <p className='col-start-2 col-end-4 text-2xl font-display font-light mb-4 pb-8'>Mauris convallis turpis nec tellus vestibulum, in ornare purus euismod. Suspendisse potenti. Proin vulputate ultrices urna, vel aliquam nunc convallis vel. Aliquam et sem sed nunc congue bibendum. Ut maximus fringilla cursus. Proin a diam sodales, hendrerit risus ut, semper mauris. Proin ut placerat est, quis tincidunt orci. Integer tempus justo purus. Integer vel metus blandit, posuere urna in, luctus massa. Nulla facilisi. Nunc sollicitudin quis odio quis efficitur. Aliquam sit amet lobortis velit. In accumsan leo vitae ultrices semper. Pellentesque leo arcu, tincidunt vitae lacus nec, convallis scelerisque tortor. Integer ac facilisis massa, ut dictum nunc.</p>
                <div className='col-start-2 col-end-4 bg-zinc-200 rounded-lg h-[180px] grid grid-cols-4 px-5 py-4 my-[40px]'>
                    <p className='col-span-2 text-lg'>Local Amenities</p>
                    <p className='col-span-1 text-lg'>Walking Distance</p>
                    <p className='col-span-1 text-lg'>Driving Distance</p>
                    <p className='col-span-2 text-lg font-display font-light'>{firstAmenity}</p>
                    <p className='col-span-1 text-lg font-display font-light'>{walkDistance_1}</p>
                    <p className='col-span-1 text-lg font-display font-light'>{driveDistance_1}</p>
                    <p className='col-span-2 text-lg font-display font-light'>{secondAmenity}</p>
                    <p className='col-span-1 text-lg font-display font-light'>{walkDistance_2}</p>
                    <p className='col-span-1 text-lg font-display font-light'>{driveDistance_2}</p>
                    <p className='col-span-2 text-lg font-display font-light'>{thirdAmenity}</p>
                    <p className='col-span-1 text-lg font-display font-light'>{walkDistance_3}</p>
                    <p className='col-span-1 text-lg font-display font-light'>{driveDistance_3}</p>
                </div>
                <EnquireNowDialog/>
            </div>
        </article>
    );
}
