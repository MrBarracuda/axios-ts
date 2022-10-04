import {Route, Routes} from "react-router";
import {Home} from "../components/Home";
import {Create} from "../components/Create/Create";
import {BlogDetails} from "../components/BlogDetails/BlogDetails";
import {NotFound} from "../components/NotFound";

export const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'create'} element={<Create />}/>
                <Route path={'blogs/:id'} element={<BlogDetails/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </>
    );
};