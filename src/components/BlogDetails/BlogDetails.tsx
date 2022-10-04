import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import api from '../../services/api/baseURL'

import {StyledBlogDetails} from "./BlogDetails.styles";
import {BLOGS_ENDPOINT} from "../../constants";
import {Blog} from "../../globalTypes";

export const BlogDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data: blog, error, isLoading} = useFetch<Blog>(BLOGS_ENDPOINT + id)
    const handleDelete = () => api.delete(BLOGS_ENDPOINT + id).then(() => navigate('/'))
// TODO pick only needed blog post from context instead of fetching all of em from database
    return (
        <StyledBlogDetails>
            {isLoading && <div>Loading...</div>}
            {error?.message && <div>{error.message}</div>}
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