interface Post {
  url: string;
  frontmatter: {
    tags: string[];
    title: string;
    author: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    pubDate: Date;
  };
}
