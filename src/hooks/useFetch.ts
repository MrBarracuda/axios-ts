import api from '../services/api/baseURL'
import {useEffect, useState} from "react";
import {FetchResponse} from "../globalTypes";


export const useFetch = (endpoint: string):FetchResponse => {
    const [requestInfo, setRequestInfo] = useState<FetchResponse>({
        data: null,
        error: null,
        isLoading: false,
    })

    useEffect(() => {
        setRequestInfo(prev => {
            return {...prev, isLoading: true}
        })
        api(endpoint)
            .then(res => {
                setRequestInfo(prev => {
                    return {...prev, data: res.data, isLoading: false}
                });
            })
            .catch(error => {
                setRequestInfo(prev => {
                    return {...prev, error, isLoading: false}
                });
            })
    }, [endpoint])
    return requestInfo
};