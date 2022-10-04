import {BlogList} from "./BlogList/BlogList";
import {useContext} from "react";
import {BlogsContext} from "../contexts/BlogsContext";

export const Home = () => {
    const {data: blogs, error, isLoading} = useContext(BlogsContext)
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error?.message}</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </>
    )
}