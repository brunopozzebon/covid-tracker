import axios from 'axios'
import { useCallback } from 'react'

const api = axios.create({
    baseURL:"https://pomber.github.io"
})

export function useCovidApi() {

    async function getCovidDatabase() {
        
        try {           
            const  result = await api.get("/covid19/timeseries.json");
            return result.data;
        } catch (e) {
            return e;
        }
    }

    return useCallback({
        getCovidDatabase
    }, [])
}
