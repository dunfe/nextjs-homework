import { client } from '@lib/client';
import { PageBlogPostOrder } from '@lib/__generated/sdk';
import PostPreview from 'components/PostPreview';
import Hero from '@components/Hero';

async function getPosts() {
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

export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return (
      <p>Failed to load data!</p>
    )
  }

  return (
    <div>
      <Hero title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap" bg={null}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {
              posts.map((post) => {
                return <PostPreview key={post?.slug} post={post} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}