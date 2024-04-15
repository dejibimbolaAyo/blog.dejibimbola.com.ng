import { Post, PostFromFile, PostMetadata, Posts } from "@/app/models/Post"

function importAll(r: __WebpackModuleApi.RequireContext) {
  return Promise.all(
    r.keys().map(async (filename) => {
      return {
        slug: `/posts/${filename.substring(2).replace(/\/page.mdx$/, '')}`,
        filename,
        module: await r(filename),
      }
    })
  ).then((posts) =>
    posts
      .filter((p) => p.module.meta.private !== true)
      .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
  )
}

function dateSortDesc(a: Date, b: Date) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getAllPostPreviews(): Promise<PostFromFile[]> {
  return importAll(require.context('@/app/posts/?preview', true, /\.mdx$/))
}

export function getAllPosts(): Promise<PostFromFile[]> {
  return importAll(require.context('@/app/posts/?rss', false, /\.mdx$/))
}

export async function getPostMetadata(pathname: string): Promise<PostMetadata> {
  const posts = await getAllPostPreviews();
  const post = posts.find(({ slug }) => pathname === slug);
  const postIndex = posts.findIndex(({slug}) => slug === pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]

  if (!!post) {
    post.module.meta.currentPost = true;
  }

  if (!!post && !!previous) {
    post.module.meta.previous = previous
  }

  if (!!post && !!next) {
    post.module.meta.next = next
  }

  return post?.module.meta as PostMetadata;
}
