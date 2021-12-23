export class Blog {
  blogTitle: string;
  blogContent: string;
  authorUsername: string;

  constructor(blogTitle: string, blogContent: string, authorUsername: string) {
    this.blogTitle = blogTitle;
    this.blogContent = blogContent;
    this.authorUsername = authorUsername;
  }
}
