import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

export default async function getPostData(id) {
  const fullPath = path.join(`${process.cwd()}/lib/post/`, `post-${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
