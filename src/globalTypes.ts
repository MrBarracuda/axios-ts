export type FetchResponse<TData, TError = Error> = {
    data: TData | null
    error: TError | null
    isLoading: boolean
}

export type TypeBlog = {
    title: string
    body: string
    author: string
    id: number
}