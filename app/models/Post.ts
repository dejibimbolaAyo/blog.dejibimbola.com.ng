import { Authors } from "./Authors";

export type PostMetadata = {
    title: string;
    description: string;
    image: string;
    date: string;
    link: string;
    authors: Authors,
    discussion?: string,
    currentPost?: boolean,
    next?: PostFromFile,
    previous?: PostFromFile,
}

export type Post = {
    meta: PostMetadata;
    slug: string;
}

export type Posts = Post[];

export type PostPreview = {
    meta: PostMetadata;
    preview: string;
    slug: string;
}

export type PostPreviews = PostPreview[]

export type PostFromFile = {
    slug: string;
    filename: string;
    module: any;
}
