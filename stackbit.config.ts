// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
console.log('xyz __dirname:', __dirname)

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: `${__dirname}/src/`,
      contentDirs: ["content"],
      models: [
        {
          name: "Post",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/blog/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
