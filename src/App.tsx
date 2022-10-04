import {BlogsContext} from "./contexts/BlogsContext";

import {Content, Wrapper} from "./GeneralStyles";
import {Navbar} from "./components/Navbar/Navbar";
import {AppRoutes} from "./routing";
import {useFetch} from "./hooks/useFetch";
import {Blog} from "./globalTypes";
import {BLOGS_ENDPOINT} from "./constants";

export const App = () => {
    const {data, error, isLoading} = useFetch<Blog[]>(BLOGS_ENDPOINT)
    return (
        <Wrapper>
            <Navbar/>
            <Content>
                <BlogsContext.Provider value={{data, error, isLoading}}>
                    <AppRoutes/>
                </BlogsContext.Provider>
            </Content>
        </Wrapper>
    )
}

