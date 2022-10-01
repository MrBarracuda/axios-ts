import {useFetch} from "../hooks/useFetch";
import {BlogList} from "./BlogList/BlogList";


export const Home = () => {
    const {data: blogs, error, isLoading} = useFetch('/blogs')
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </>
    )
}