import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-28', // use current date (YYYY-MM-DD) to target the latest API version
})
