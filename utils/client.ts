import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'jn5bn2p3',
  dataset: 'production',
  apiVersion: '2022-12-19',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
