import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from '../../services/api/baseURL'

import {CreateBlog, onChangeEvents} from "../../globalTypes";
import {BLOGS_ENDPOINT} from "../../constants";
import {StyledCreate} from "./Create.styles";


export const Create = ({blogs, error, isLoading}: any) => {
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
            {error && <div>{error}</div>}
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
                        {/*for now gonna leave it as it is*/}
                        {blogs.map((blog: any, index: number) => (
                            <option value={blog.author} key={index}>{blog.author}</option>))}
                    </select>
                    <button>Add Blog</button>
                </form>
            )}

        </StyledCreate>
    )
}