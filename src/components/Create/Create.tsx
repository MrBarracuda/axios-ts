import {StyledCreate} from "./Create.styles"
import {ChangeEvent, FormEvent, useState} from "react";
import api from '../../services/api/baseURL'
import {useNavigate} from "react-router-dom";
import {BLOGS_ENDPOINT} from "../../constants";

type FieldsType = {
    title: string
    body: string
    author: string
}

export const Create = () => {
    type onChangeEvents =
        ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | ChangeEvent<HTMLSelectElement>
    const navigate = useNavigate()
    const [fields, setFields] = useState<FieldsType>({
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
            <form onSubmit={(event) => onSubmit(event)}>
                <label>Blog title</label>
                <input required type="text" value={fields.title} name={'title'}
                       onChange={onChange}/>
                <label>Blog body</label>
                <textarea required value={fields.body} name={'body'}
                          onChange={(event) => onChange(event)}/>
                <label>Blog author</label>
                <select name={'author'} onChange={(event) => onChange(event)}>
                    <option value="yoshi">yoshi</option>
                    <option value="mario">mario</option>
                </select>
                <button>Add Blog</button>
            </form>
        </StyledCreate>
    )
}