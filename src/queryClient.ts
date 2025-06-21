import {QueryClient} from 'react-query'

let client: QueryClient | null = null
type AnyOBJ = { [key: string]: any }

export function getClient() {
    if (!client) {
        client = new QueryClient()
    }
    return client
}

const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async ({
                                  method, path,
                                  // body, params
                              }: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    body?: AnyOBJ
    params?: AnyOBJ
}) => {
    try {
        const url = `${BASE_URL}${path}`
        const fetchOptions: RequestInit = {
            method, headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': BASE_URL
            }
        }
        const res = await fetch(url, fetchOptions)
        return await res.json()
    } catch (err) {
        console.error(err)
    }
}

export const QueryKeys = {
    PRODUCTS: 'PRODUCTS'
}