import {useFetch} from "../hooks/useFetch";
import {BlogList} from "./BlogList/BlogList";
import {BLOGS_ENDPOINT} from "../constants";
import {Blog} from "../globalTypes";


export const Home = ({blogs, error, isLoading}:any) => {

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </>
    )
}