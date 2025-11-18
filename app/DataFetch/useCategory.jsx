'use client'

import { useEffect, useState } from "react"

function useCategory() {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                setError(null)

                const baseurl = process.env.NEXT_PUBLIC_BASE_URL || ''
                const res = await fetch(`${baseurl}/categorys.json`)

                if (!res.ok) {
                    throw new Error(`Failed to fetch categories: ${res.status}`)
                }

                const data = await res.json()
                setCategory(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

    return { category, loading, error }
}

export default useCategory