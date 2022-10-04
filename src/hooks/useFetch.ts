import api from '../services/api/baseURL'
import {useEffect, useState} from "react";
import {FetchResponse} from "../globalTypes";

export const useFetch = <TData>(endpoint: string): FetchResponse<TData> => {
    const [requestInfo, setRequestInfo] = useState<FetchResponse<TData>>({
        data: null,
        error: null,
        isLoading: false,
    })

    useEffect(() => {
        setRequestInfo(prev => ({...prev, isLoading: true}))
        api(endpoint)
            .then(res => setRequestInfo(prev => ({...prev, data: res.data, isLoading: false})))
            .catch(error => setRequestInfo(prev => ({...prev, error, isLoading: false})))
    }, [endpoint])
    return requestInfo
};