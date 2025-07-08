import { useState, useEffect } from 'react';

export function useFetch(url: string) {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        if (!url) return;

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                });
                const result = await response.json();

                setData(result.rows);
                setLoad(false);
            } catch (err: unknown) {
                if (err instanceof Error && err.name === 'AbortError') {
                    console.log('AbortError: Fetch request aborted');
                }
            }
        }
        fetchData();
    }, [url]);

    return { load, data };
}
