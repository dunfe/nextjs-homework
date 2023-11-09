"use client";
import { createClient } from "contentful-management";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import Hero from '@components/Hero';
import { textToDocument, toSlug } from "@lib/helper";

type Inputs = {
    title: string,
    content: string,
};

const client = createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN ?? '',
});

const New = () => {
    const route = useRouter();
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const title = data.title;
        const content = data.content;
        client
            .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '')
            .then(space => space.getEnvironment('master'))
            .then(environment =>
                environment.createEntry('pageBlogPost', {
                    fields: {
                        internalName: {
                            'en-US': title,
                        },
                        title: {
                            'en-US': title,
                        },
                        publishedDate: {
                            'en-US': new Date().toISOString(),
                        },
                        featuredImage: {
                            'en-US': {
                                sys: {
                                    id: 'iesDwdILzVwGvGpGbbI2b',
                                    linkType: 'Asset',
                                    type: 'Link',
                                },
                            },
                        },
                        slug: {
                            'en-US': toSlug(title),
                        },
                        content: {
                            'en-US': textToDocument(content),
                        },
                    },
                }),
            )
            .then(entry => {
                entry.publish().then(() => {
                    toast.success('Post created successfully');
                    route.push('/');
                });
            })
            .catch(err => {
                toast.error(err.message);
            });
    };
    return (
        <>
            <Hero title="New Post" subtitle="Create a new post" bg={null} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Title</label>
                                <input className="form-control" {...register("title", { required: true })} />
                            </div>
                            {errors.title && <span>This field is required</span>}
                            <div className="form-group">
                                <label>Content</label>
                                <textarea className="form-control" {...register("content", { required: true })} />
                            </div>
                            {errors.content && <span>This field is required</span>}
                            <input type="submit" disabled={isLoading} className="btn btn-default" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default New;