export class Blog {
    blogtitle: string;
    blogcontent: string;
    authorusername: string;

    constructor(
        blogTitle: string,
        blogContent: string,
        authorUsername: string
    ) {
        this.blogtitle = blogTitle;
        this.blogcontent = blogContent;
        this.authorusername = authorUsername;
    }
}
