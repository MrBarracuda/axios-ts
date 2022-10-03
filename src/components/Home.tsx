import {useFetch} from "../hooks/useFetch";
import {BlogList} from "./BlogList/BlogList";
import {Search} from "./Search/Search";
import {useState} from "react";
import {TypeBlog} from "../globalTypes";
import {BLOGS_ENDPOINT} from "../constants";


export const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState<TypeBlog[]>([]);

    const {data: blogs, error, isLoading} = useFetch(BLOGS_ENDPOINT)

    const searchItems = (searchValue: string) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filterBlogs: TypeBlog[] = blogs.filter((blog: TypeBlog) =>
                Object.values(blog)
                    .join('')
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            );
            setFilteredBlogs(filterBlogs);
        } else {
            setFilteredBlogs(blogs);
        }
    };

    return (
        <>
            <Search searchItems={searchItems} searchInput={searchInput}/>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={searchInput.length > 1 ? filteredBlogs : blogs}/>}
        </>
    )
}