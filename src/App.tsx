import {FC} from 'react';

import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router";

import {Content, Wrapper} from "./GeneralStyles";
import {NotFound} from "./components/NotFound";
import {Home} from "./components/Home";
import {BlogDetails} from "./components/BlogDetails/BlogDetails";


export const App: FC = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Content>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    {/*<Route path={'/create'} element={<Create/>}/>*/}
                    <Route path={'/blogs/:id'} element={<BlogDetails/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Content>
        </Wrapper>
    )
}

