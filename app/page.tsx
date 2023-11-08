import { client } from '@lib/client';
import { PageBlogPostOrder } from '@lib/__generated/sdk';
import PostPreview from 'components/PostPreview';


export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return (
      <p>Failed to load data!</p>
    )
  }

  return (
    <>
    {
      posts.map((post) => {
        return <PostPreview key={post?.slug} post={post} />
    })}
    </>
  )
}

export async function getPosts() {
  const landingPageData = await client.pageLanding();
  const page = landingPageData.pageLandingCollection?.items[0];

  const blogPostsData = await client.pageBlogPostCollection({
    limit: 6,
    order: PageBlogPostOrder.PublishedDateDesc,
    where: {
      slug_not: page?.featuredBlogPost?.slug,
    },
  });
  const posts = blogPostsData.pageBlogPostCollection?.items;

  return posts;
}
