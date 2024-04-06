export interface Project {
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    github: string;
    demo: string;
    excerpt: string;
    body: any;
    tags: Array<Tag>;
    _id: string;
}

export interface Tag {
  title: string;
  slug: {
    current: string;
  };
  _id: string;
}