import { client } from "@lib/client";

const Post = ({ params }: { params: { slug: string } }) => {
  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {params.slug}
          </div>
        </div>
      </div>
    </article>
  );
};

export async function generateStaticParams() {
    const data = await client.pageBlogPostCollection();
    
    return data.pageBlogPostCollection?.items.map(blogPost =>
        blogPost?.slug
          ? {
            slug: blogPost.slug,
            }
          : undefined,
      ).filter(Boolean);
  }

export default Post;
