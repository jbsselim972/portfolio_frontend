import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PJID,
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: true,
  token: REACT_APP_SANITY_TOKEN,
});
