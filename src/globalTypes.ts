import {ChangeEvent} from "react";

export interface FetchResponse<TData, TError = Error> {
    data: TData | null;
    error: TError | null;
    isLoading: boolean;
}

export type CreateBlog = {
    title: string
    body: string
    author: string
}

export interface Blog extends CreateBlog {
    id: number
}

export type onChangeEvents =
    ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLTextAreaElement>
    | ChangeEvent<HTMLSelectElement>