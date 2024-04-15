export interface Project {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  thumbnail: any;
  techlist: Array<string>;
  github: string;
  demo: string;
  excerpt: string;
  body: any;
  _id: string;
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
