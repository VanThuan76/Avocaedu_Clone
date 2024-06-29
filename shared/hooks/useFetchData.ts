import { IBaseResponse } from '@/@types/base';
import { axiosInstance } from '@/shared/config/axios';
import { useState, useEffect } from 'react';

const useFetchData = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get<IBaseResponse<T>>(url);
                const result = response.results;
                setData(result);
            } catch (error) {
                setError(error as Error);
            }
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;