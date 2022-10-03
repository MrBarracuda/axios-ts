import {FC} from 'react';

import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router";

import {Content, Wrapper} from "./GeneralStyles";
import {NotFound} from "./components/NotFound";
import {Home} from "./components/Home";
import {BlogDetails} from "./components/BlogDetails/BlogDetails";
import {Create} from "./components/Create/Create";
import {useFetch} from "./hooks/useFetch";
import {BLOGS_ENDPOINT} from "./constants";
import {Blog, FetchResponse} from "./globalTypes";


export const App = () => {
    const {data, error, isLoading} = useFetch<Blog[]>(BLOGS_ENDPOINT)

    return (
        <Wrapper>
            <Navbar/>
            <Content>
                <Routes>
                    <Route path={'/'} element={<Home blogs={data} error={error?.message} isLoading={isLoading}/>}/>
                    <Route path={'/create'} element={<Create blogs={data} error={error?.message} isLoading={isLoading}/>}/>
                    <Route path={'/blogs/:id'} element={<BlogDetails/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Content>
        </Wrapper>
    )
}

