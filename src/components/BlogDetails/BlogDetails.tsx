import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import api from '../../services/api/baseURL'

import {StyledBlogDetails} from "./BlogDetails.styles";
import {BLOGS_ENDPOINT} from "../../constants";
import {TypeBlog} from "../../globalTypes";

export const BlogDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data: blog, error, isLoading} = useFetch<TypeBlog>(BLOGS_ENDPOINT + id)
    const handleDelete = () => api.delete(BLOGS_ENDPOINT + id).then(() => navigate('/'))

    return (
        <StyledBlogDetails>
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
        </StyledBlogDetails>
    )

}