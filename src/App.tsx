import {Route, Routes} from "react-router";
import {Content, Wrapper} from "./GeneralStyles";
import {Navbar} from "./components/Navbar/Navbar";
import {NotFound} from "./components/NotFound";
import {Home} from "./components/Home";
import {BlogDetails} from "./components/BlogDetails/BlogDetails";
import {Create} from "./components/Create/Create";

export const App = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Content>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/create'} element={<Create/>}/>
                    <Route path={'/blogs/:id'} element={<BlogDetails/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Content>
        </Wrapper>
    )
}

