import {FormEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from '../../services/api/baseURL'

import {Blog, CreateBlog, onChangeEvents} from "../../globalTypes";
import {BLOGS_ENDPOINT} from "../../constants";
import {StyledCreate} from "./Create.styles";
import {BlogsContext} from "../../contexts/BlogsContext";


export const Create = () => {
    const {data: blogs, error, isLoading} = useContext(BlogsContext)
    const navigate = useNavigate()
    const [fields, setFields] = useState<CreateBlog>({
        title: '',
        body: '',
        author: 'mario'
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        api.post(BLOGS_ENDPOINT, fields).then(() => navigate('/'))
    }
    const onChange = (event: onChangeEvents) => setFields(prev => ({
        ...prev,
        [event.target.name]: event.target.value
    }))

    return (

        <StyledCreate>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error?.message}</div>}
            {blogs && (
                <form onSubmit={onSubmit}>
                    <label>Blog title</label>
                    <input required type={'text'} value={fields.title} name={'title'}
                           onChange={onChange}/>
                    <label>Blog body</label>
                    <textarea required value={fields.body} name={'body'}
                              onChange={onChange}/>
                    <label>Blog author</label>
                    <select name={'author'} onChange={onChange}>
                        // TODO make that users can create a new author and add em to db (MAYBE with different endpoint)
                        {blogs.map((blog: Blog, index: number) => (
                            <option value={blog.author} key={index}>{blog.author}</option>))}
                    </select>
                    <button>Add Blog</button>
                </form>
            )}

        </StyledCreate>
    )
}