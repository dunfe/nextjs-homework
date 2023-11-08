import { PageBlogPostFieldsFragment } from "@lib/__generated/sdk"
import Link from "next/link"

interface IProps {
    post: PageBlogPostFieldsFragment | null
}

const PostPreview = (props: IProps) => {
    const { post } = props;

    if (!post) {
        return (
            <p>Failed to load post!</p>
        )
    }
    return (
        <div className="post-preview">
            <Link href={`/post/${post.slug?.toString()}` ?? "#"}>
                <h2 className="post-title">
                    {post.title?.toString()}
                </h2>
                <h3 className="post-subtitle">
                    {post.shortDescription?.toString()}
                </h3>
            </Link>
            <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
        </div>
    )
}

export default PostPreview;