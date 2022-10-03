import {useFetch} from "../hooks/useFetch";
import {BlogList} from "./BlogList/BlogList";
import {Search} from "./Search/Search";
import {useState} from "react";
import {TypeBlog} from "../globalTypes";
import {BLOGS_ENDPOINT} from "../constants";


export const Home = () => {
    const [searchInputValue, setSearchInputValue] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState<TypeBlog[]>([]);

    const {data: blogs, error, isLoading} = useFetch<TypeBlog[]>(BLOGS_ENDPOINT)

    const setSearchItems = (searchValue: string) => {
        setSearchInputValue(searchValue);
        if (searchInputValue !== '' && blogs) {
            const filterBlogs: TypeBlog[] = blogs.filter((blog: TypeBlog) =>
                Object.values(blog)
                    .join('')
                    .toLowerCase()
                    .includes(searchInputValue.toLowerCase())
            );
            setFilteredBlogs(filterBlogs);
        } else {
            setFilteredBlogs(blogs!);
        }
    };

    return (
        <>
            <Search setSearchItems={setSearchItems} searchInputValue={searchInputValue}/>
            {isLoading && <div>Loading...</div>}
            {error?.message && <div>{error.message}</div>}
            {blogs && <BlogList blogs={searchInputValue.length > 1 ? filteredBlogs : blogs}/>}
        </>
    )
}