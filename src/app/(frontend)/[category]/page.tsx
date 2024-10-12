"use client"
// import PageHeader from "../components/PageHeader";
import { usePathname } from 'next/navigation'

export default function CategoryRoute({ params }: { params: { category: string } }) {
  const filter = params.category;
  // const { data } = await fetchPostsByCategory(filter);

  // if (data.length === 0) return <div>No properties in this category</div>;

  // const { name, description } = data[0]?.attributes.category.data.attributes;

  const pathname = usePathname()

  return (
      <div>
        <p>category route is {pathname}</p>
          {/* <PageHeader heading={name} text={description} />
          <PostList data={data} /> */}
      </div>
  );
}
