import { createContext} from "react";
import {Blog, FetchResponse} from "../globalTypes";

export const BlogsContext = createContext<FetchResponse<Blog[]>>({} as FetchResponse<Blog[]>)
// export const BlogsContext = createContext<FetchResponse<Blog[]>>({  data: [], error: null, isLoading: false})