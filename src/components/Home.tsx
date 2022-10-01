
import {useFetch} from "../hooks/useFetch";
import {BlogList} from "./BlogList/BlogList";
<<<<<<< Updated upstream
import {FetchResponse} from "../globalTypes";
=======
import {Search} from "./Search/Search";
import {useState} from "react";
>>>>>>> Stashed changes

// type Blogs = {
//     title: string
//     body: string
//     author: string
//     id: number
// }

export const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const {data: blogs, error, isLoading} = useFetch('/blogs')

    const searchItems = (searchValue: any) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredBlogs = blogs.filter((item: any) =>
                Object.values(item)
                    .join('')
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            );
            setFilteredBlogs(filteredBlogs);
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