import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";
import api from '../../services/api/baseURL'

import {BlogPreview} from "./BlogDetails.styles";
import {BLOGS_ENDPOINT} from "../../constants";

export const BlogDetails = () => {
    const {id} = useParams()
    const exactBlog = `${BLOGS_ENDPOINT}/${id}`
    const navigate = useNavigate()
    const {data: blog, error, isLoading} = useFetch(exactBlog)
    const handleDelete = () => api.delete(exactBlog).then(() => navigate('/'))

    return (
        <BlogPreview>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Written by{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete blog</button>
                </article>
            )}
        </BlogPreview>
    )

}