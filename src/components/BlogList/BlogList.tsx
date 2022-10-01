import {Link} from 'react-router-dom';
import {FC} from "react";
import { TypeBlog} from "../../globalTypes";
import {BLOGS_ENDPOINT} from "../../constants";



export const BlogList = ({blogs}: any) => (
    <div className="blog-list">
        {blogs.map((blog: TypeBlog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={BLOGS_ENDPOINT + blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </Link>
            </div>
        ))}
    </div>
);