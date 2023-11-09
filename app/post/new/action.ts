'use server';

import { createClient } from 'contentful-management';
import { revalidatePath } from 'next/cache';

import { textToDocument, toSlug } from '@lib/helper';

export async function createPost(prevState: any, formData: FormData) {
  const client = createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN ?? '',
  });

  const title = formData.get('title')?.toString() ?? 'Title';
  const content = formData.get('content')?.toString() ?? 'Content';

  
}
