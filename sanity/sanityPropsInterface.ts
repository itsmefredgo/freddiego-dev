export interface Project {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  thumbnail: any;
  techstack: Array<Tech>;
  techlist: Array<string>;
  github: string;
  demo: string;
  excerpt: string;
  body: any;
  categories: Array<category>;
  _id: string;
}

export interface category {
  name: string;
  slug: {
    current: string;
    _id: string;
  };
}

export interface Blog {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt: string;
  body: any;
  _id: string;
}

export interface Tech {
  name: string;
  slug: {
    current: string;
    _id: string;
  };
}
