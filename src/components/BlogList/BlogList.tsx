import {Link} from 'react-router-dom';
import {Blog} from "../../globalTypes";
import {BLOGS_ENDPOINT} from "../../constants";
import {BlogPreview} from "./BlogList.styles";

// still not working, but I'm getting closer

// why it wouldn't work before? With type Blog[] it was giving me an error
// don't know how and why, but it works now
type BlogListProps = {
    blogs: Blog[]
}
export const BlogList = ({blogs}: BlogListProps) => (
    <>
        {blogs?.map((blog: Blog) => (
            <BlogPreview key={blog.id}>
                <Link to={BLOGS_ENDPOINT + blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
            </BlogPreview>
        ))}
    </>
);