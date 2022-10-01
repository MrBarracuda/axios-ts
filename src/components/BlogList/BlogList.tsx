import {Link} from 'react-router-dom';
import { TypeBlog} from "../../globalTypes";
import {BLOGS_ENDPOINT} from "../../constants";
import { BlogPreview} from "./BlogList.styles";


export const BlogList = ({blogs}: any) => (
    <>
        {blogs.map((blog: TypeBlog) => (
            <BlogPreview key={blog.id}>
                <Link to={BLOGS_ENDPOINT + blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
            </BlogPreview>
        ))}
    </>
);