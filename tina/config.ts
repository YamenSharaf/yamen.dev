import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CMS_CLIENT_ID || null,
  // Get this from tina.io
  token: process.env.TINA_CMS_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            searchable: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            isTitle: true,
            required: true,
            searchable: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Date Posted",
            required: true,
          },
          {
            type: "datetime",
            name: "modDatetime",
            label: "Date Modified",
            required: false,

            
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            searchable: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
        ],
      },
    ],
  },
});
