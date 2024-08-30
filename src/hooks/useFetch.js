import React from 'react'
import { useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const { data, isLoading, error } = state

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return
        try {

            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }

            const res = await fetch(url, options)
            const data = await res.json()
            setState({
                data,
                isLoading: false,
                error: null
            })
        }
        catch (error) {
            setState({
                data: null,
                isLoading: false,
                error: error
            })
        }
    }

    return {
        data,
        isLoading,
        error,
        fetchData
    }
}
