import { client } from "@lib/client";
import { CtfRichText } from '@components/contentful/CtfRichText';
import { Document } from '@contentful/rich-text-types';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blogPageData = await client.pageBlogPost({ slug: params.slug.toString() });
  const blogPost = blogPageData.pageBlogPostCollection?.items[0];

  if (!blogPost) {
    return null;
  }

  return {
    title: blogPost.title,
  }
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const blogPageData = await client.pageBlogPost({ slug: params.slug.toString() });
  const blogPost = blogPageData.pageBlogPostCollection?.items[0];

  if (!blogPost) {
    return null;
  }

  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <CtfRichText json={blogPost.content?.json} links={blogPost.content?.links} />
          </div>
        </div>
      </div>
    </article>
  );
};

export async function generateStaticParams() {
  const data = await client.pageBlogPostCollection();
  const posts = data.pageBlogPostCollection?.items;

  if (!posts) {
    return [];
  }

  return posts.filter(item => item && item.slug).map(blogPost => {
    slug: blogPost?.slug
  });
}

export default Post;
