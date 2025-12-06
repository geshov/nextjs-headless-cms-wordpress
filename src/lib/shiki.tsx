import { unified } from "unified";

import rehypeParse from "rehype-parse";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export const styleCode = async (html: string) => {
  const vfile = await unified()
    .use(rehypeParse)
    .use(rehypePrettyCode, {
      theme: {
        dark: "github-dark-default",
        light: "github-light-default",
      },
    })
    .use(rehypeStringify)
    .process(html);

  return vfile.value;
};
