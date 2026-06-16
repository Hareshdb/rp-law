import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});